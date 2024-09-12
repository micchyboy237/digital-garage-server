import { multerUpload, S3File, uploadImageAndThumbnail } from "@boilerplate/aws"
import {
  MediaFile,
  MediaFileType,
  PostCategory,
  Subscription,
  User,
  Vehicle,
  VehicleDetails,
  VehicleOwnership,
} from "@boilerplate/database"
import { TRPCError } from "@trpc/server"
import fs from "fs"
import {
  documentSchema,
  getVehicleGalleryPostSchema,
  getVehicleOwnershipSchema,
  onboardUserSchema,
  postSchema,
  respondTransferSchema,
  subscribeSchema,
  transferSchema,
  updateProfileSchema,
  updateVehicleSchema,
} from "../schemas/me.schema"
import { meService } from "../services"
import {
  createOrUpdateMediaFile,
  createOrUpdateSubscription,
  createOrUpdateVehicle,
  createOrUpdateVehicleDetails,
  createOrUpdateVehicleGalleryPost,
  createOrUpdateVehicleOwnership,
} from "../services/model.service"
import { protectedProcedure, publicProcedure, t } from "../trpc"

export const meRouter = t.router({
  onboard: protectedProcedure.input(onboardUserSchema).mutation(async ({ ctx, input }): Promise<User> => {
    const userId = ctx.user?.id!
    return await meService.updateUser(userId, { ...input, accountStatus: "SELECT_SUBSCRIPTION" })
  }),
  subscribe: protectedProcedure.input(subscribeSchema).mutation(async ({ ctx, input }): Promise<Subscription> => {
    const userId = ctx.user?.id!
    const subscription = await createOrUpdateSubscription(input, userId)
    // Update user account status
    await meService.updateUser(userId, { accountStatus: "ACTIVE" })
    return subscription
  }),
  updateProfile: protectedProcedure.input(updateProfileSchema).mutation(async ({ ctx, input }): Promise<User> => {
    const userId = ctx.user?.id!
    return await meService.updateUser(userId, input)
  }),
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session
  }),
  getUser: protectedProcedure.query(async ({ ctx }): Promise<User> => {
    return await meService.getUser(ctx.user?.id!)
  }),
  getSubscription: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id!
    const activeSubscription = await meService.getActiveSubscription(userId)
    return activeSubscription
  }),
  getVehicles: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id!

    return await ctx.prisma.vehicle.findMany({
      where: { ownerId: userId },
      include: { details: true },
    })
  }),
  getVehicleOwnership: protectedProcedure.input(getVehicleOwnershipSchema).query(async ({ ctx, input }) => {
    const userId = ctx.user?.id!
    console.log("Get vehicle ownership:", input)

    const vehicleOwnership = await ctx.prisma.vehicleOwnership.findUnique({
      where: {
        userId_vehicleId: {
          userId: userId,
          vehicleId: input.vehicleId,
        },
        isCurrentOwner: true,
      },
      include: {
        vehicleDisplayPhoto: true,
        user: true,
        vehicle: true,
        posts: {
          include: {
            files: true,
          },
        },
      },
    })

    if (!vehicleOwnership) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" })
    }

    return vehicleOwnership
  }),
  getVehicleOwnerships: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id!

    return await ctx.prisma.vehicleOwnership.findMany({
      where: { userId },
      include: {
        user: true,
        vehicle: true,
        posts: {
          include: {
            files: true,
          },
        },
        vehicleDisplayPhoto: true,
      },
    })
  }),
  getCurrentVehicleOwnerships: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id!

    return await ctx.prisma.vehicleOwnership.findMany({
      where: { userId, isCurrentOwner: true },
      include: {
        user: true,
        vehicle: true,
        posts: {
          include: {
            files: true,
          },
        },
        vehicleDisplayPhoto: true,
      },
    })
  }),
  getPreviousVehicleOwnerships: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id!

    return await ctx.prisma.vehicleOwnership.findMany({
      where: { userId, isCurrentOwner: false },
      include: {
        user: true,
        vehicle: true,
        posts: {
          include: {
            files: true,
          },
        },
        vehicleDisplayPhoto: true,
      },
    })
  }),
  getVehicleDetails: protectedProcedure.input(getVehicleOwnershipSchema).query(async ({ ctx, input }) => {
    const userId = ctx.user?.id!
    const vehicleOwnershipResult = await ctx.prisma.vehicleOwnership.findUnique({
      where: {
        id: input.ownershipId,
      },
      include: {
        vehicle: true,
        vehicleDetails: true,
        vehicleDisplayPhoto: true,
      },
    })

    if (!vehicleOwnershipResult) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" })
    }

    if (vehicleOwnershipResult.userId !== userId) {
      throw new TRPCError({ code: "FORBIDDEN", message: "Unauthorized to view vehicle details" })
    }

    const { vehicle, vehicleDetails, vehicleDisplayPhoto, ...vehicleOwnership } = vehicleOwnershipResult

    return {
      vehicle,
      vehicleDetails,
      vehicleDisplayPhoto,
      vehicleOwnership,
    } as {
      vehicle: Vehicle
      vehicleDetails: VehicleDetails
      vehicleDisplayPhoto: MediaFile
      vehicleOwnership: VehicleOwnership
    }
  }),
  getVehicleGalleryPosts: protectedProcedure.input(getVehicleGalleryPostSchema).query(async ({ ctx, input }) => {
    const userId = ctx.user?.id!
    const { ownershipId } = input

    const vehiclePosts = await ctx.prisma.vehiclePost.findMany({
      where: { createdById: userId, category: PostCategory.GALLERY, ownershipId },
      include: { files: true, ownership: true },
    })

    return { vehiclePosts }
  }),
  getVehicleHistoryPosts: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id!

    const vehiclePosts = await ctx.prisma.vehiclePost.findMany({
      where: { createdById: userId, category: PostCategory.HISTORY },
      include: { files: true, ownership: true },
    })

    return { vehiclePosts }
  }),
  getTransfers: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id!
    const transfers = await ctx.prisma.vehicleTransfer.findMany({
      where: {
        OR: [{ senderId: userId }, { recipientId: userId }],
      },
      include: { vehicle: true },
    })
    return transfers
  }),
  upsertVehicle: protectedProcedure.mutation(async ({ ctx, input }) => {
    return new Promise((resolve, reject) => {
      multerUpload.single("displayPhoto")(ctx.req, ctx.res, async (err) => {
        if (err) {
          reject(err)
          return
        }

        const folder = "vehicle"
        const input = ctx.req.body
        console.log("Received input:", input)

        const file = ctx.req.file
        console.log("Received file:", file)

        // Create a new vehicle with the provided details
        const vehicle = await createOrUpdateVehicle(
          {
            registrationNumber: input.registrationNumber,
            make: input.make,
            model: input.model,
          },
          ctx.session?.userId,
        )

        // Create an ownership record for the new vehicle
        const ownership = await createOrUpdateVehicleOwnership(
          {
            vehicleId: vehicle.id,
            overview: input.overview,
          },
          ctx.session?.userId,
        )

        // Create the vehicle details
        const vehicleDetails = await createOrUpdateVehicleDetails(
          {
            registrationNumber: input.registrationNumber,
            make: input.make,
            model: input.model,
            yearOfManufacture: parseInt(input.yearOfManufacture),
            engineCapacity: parseInt(input.engineCapacity),
            colour: input.colour,
            taxDueDate: input.taxDueDate,
            taxStatus: input.taxStatus,
            motStatus: input.motStatus,
            motExpiryDate: input.motExpiryDate,
            fuelType: input.fuelType,
          },
          ownership.id,
        )

        let displayPhoto

        if (file) {
          const fileBuffer = fs.readFileSync(file.path)
          const s3File: S3File = {
            originalname: file.originalname,
            buffer: fileBuffer,
          }

          console.log("Uploading to S3...", s3File)

          const { imageUrl, thumbnailUrl } = await uploadImageAndThumbnail(s3File, folder)

          // Delete the file after processing
          fs.unlinkSync(file.path) // Remove the temporary file

          displayPhoto = {
            url: imageUrl,
            thumbnailUrl,
            fileName: file.originalname,
            type: MediaFileType.IMAGE,
            mimeType: file.mimetype,
          } as MediaFile
        }

        // Create the vehicle display photo
        if (displayPhoto) {
          await ctx.prisma.mediaFile.create({
            data: {
              ...displayPhoto,
              vehicleDisplayPhotoOwnership: {
                connect: { id: ownership.id },
              },
            },
          })
        }

        resolve({ vehicle, ownership, vehicleDetails })
      })
    })
  }),
  upsertVehicleGalleryPost: protectedProcedure.mutation(async ({ ctx, input }) => {
    return new Promise((resolve, reject) => {
      multerUpload.array("files")(ctx.req, ctx.res, async (err) => {
        if (err) {
          reject(err)
          return
        }

        const folder = "vehicle"
        const input = ctx.req.body
        console.log("Received input:", input)

        const files = ctx.req.files as Express.Multer.File[]
        console.log("Received files:", files)

        try {
          const vehiclePost = await createOrUpdateVehicleGalleryPost(input, ctx.session?.userId)

          if (files && files.length > 0) {
            const displayPhotos = await Promise.all(
              files.map(async (file) => {
                const fileBuffer = fs.readFileSync(file.path)
                const s3File: S3File = {
                  originalname: file.originalname,
                  buffer: fileBuffer,
                }

                console.log("Uploading to S3...", s3File)

                const { imageUrl, thumbnailUrl } = await uploadImageAndThumbnail(s3File, folder)

                // Delete the file after processing
                fs.unlinkSync(file.path) // Remove the temporary file

                const displayPhoto = {
                  url: imageUrl,
                  thumbnailUrl,
                  fileName: file.originalname,
                  type: MediaFileType.IMAGE,
                  mimeType: file.mimetype,
                } as MediaFile

                // Create the vehicle display photo
                return await createOrUpdateMediaFile({
                  ...displayPhoto,
                  ownershipId: vehiclePost.ownershipId,
                  postId: vehiclePost.id,
                })
              }),
            )
          }

          resolve({ vehiclePost })
        } catch (err) {
          console.error("Error while processing files:", err)
          reject(err)
        }
      })
    })
  }),
  // upsertVehicleGalleryPost: protectedProcedure.input(upsertVehicleGalleryPostSchema).mutation(async ({ ctx, input }) => {
  //   const userId = ctx.user?.id!
  //   const vehicleOwnershipResult = await ctx.prisma.vehicleOwnership.findUnique({
  //     where: {
  //       id: input.ownershipId,
  //     },
  //   })

  //   if (!vehicleOwnershipResult) {
  //     throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" })
  //   }

  //   if (vehicleOwnershipResult.userId !== userId) {
  //     throw new TRPCError({ code: "FORBIDDEN", message: "Unauthorized to view vehicle details" })
  //   }

  //   const vehiclePost = createOrUpdateVehicleGalleryPost(input, ctx.user?.id)
  //   return vehiclePost
  // }),
  updateVehicle: protectedProcedure.input(updateVehicleSchema).mutation(async ({ ctx, input }) => {
    const { vehicleId, ...updates } = input

    return await ctx.prisma.$transaction(async (prisma) => {
      const vehicle = await prisma.vehicle.findUnique({
        where: { id: vehicleId },
      })

      if (!vehicle) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" })
      }

      const isTransferred = await prisma.vehicleTransfer.findFirst({
        where: { vehicleId, status: "ACCEPTED" },
      })

      if (vehicle.ownerId !== ctx.user?.id || isTransferred) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Cannot edit transferred vehicle" })
      }

      return await prisma.vehicle.update({
        where: { id: vehicleId },
        data: updates,
      })
    })
  }),
  addPost: protectedProcedure.input(postSchema).mutation(async ({ ctx, input }) => {
    const { vehicleId, ...postDetails } = input

    return await ctx.prisma.$transaction(async (prisma) => {
      const vehicle = await prisma.vehicle.findUnique({
        where: { id: vehicleId },
      })

      if (!vehicle || vehicle.ownerId !== ctx.user?.id) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Unauthorized to add post" })
      }

      return await prisma.vehiclePost.create({
        data: {
          ...postDetails,
          vehicleId,
          createdById: ctx.user?.id!,
        },
      })
    })
  }),
  addDocument: protectedProcedure.input(documentSchema).mutation(async ({ ctx, input }) => {
    const { vehicleId, ...documentDetails } = input

    return await ctx.prisma.$transaction(async (prisma) => {
      const vehicle = await prisma.vehicle.findUnique({
        where: { id: vehicleId },
      })

      const isTransferred = await prisma.vehicleTransfer.findFirst({
        where: { vehicleId, status: "ACCEPTED" },
      })

      if (!vehicle || vehicle.ownerId !== ctx.user?.id || isTransferred) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Cannot add documents to a transferred vehicle" })
      }

      return await prisma.vehicleDocument.create({
        data: {
          ...documentDetails,
          createdById: ctx.user?.id!,
        },
      })
    })
  }),
  transferVehicle: protectedProcedure.input(transferSchema).mutation(async ({ ctx, input }) => {
    console.log("Transfer vehicle:", input)
    const { vehicleId, recipientId, excludedPhotos, excludedVideos, excludedDocs } = input

    return await ctx.prisma.$transaction(async (prisma) => {
      const vehicle = await prisma.vehicle.findUnique({
        where: { id: vehicleId },
      })

      if (!vehicle) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" })
      }

      if (vehicle.ownerId !== ctx.user?.id) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Cannot transfer this vehicle" })
      }

      return await prisma.vehicleTransfer.create({
        data: {
          vehicleId,
          senderId: ctx.user?.id!,
          recipientId,
          status: "REQUESTED",
          excludedPhotos,
          excludedVideos,
          excludedDocs,
        },
      })
    })
  }),
  respondToTransfer: protectedProcedure.input(respondTransferSchema).mutation(async ({ ctx, input }) => {
    const { transferId, status } = input

    return await ctx.prisma.$transaction(async (prisma) => {
      const transfer = await prisma.vehicleTransfer.findUnique({
        where: { id: transferId },
      })

      if (!transfer) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Transfer request not found" })
      }

      if (transfer.recipientId !== ctx.user?.id) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Unauthorized to respond to transfer" })
      }

      if (transfer.status !== "REQUESTED") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Transfer request already responded to" })
      }

      if (status === "ACCEPTED") {
        const oldOwnership = await prisma.vehicleOwnership.update({
          where: { userId_vehicleId: { userId: transfer.senderId, vehicleId: transfer.vehicleId } }, // Fixed here
          data: { isCurrentOwner: false, endDate: new Date() },
        })

        const newOwnership = await prisma.vehicleOwnership.create({
          data: {
            userId: transfer.recipientId,
            vehicleId: transfer.vehicleId,
            isCurrentOwner: true,
            startDate: new Date(),
          },
        })

        await prisma.vehicle.update({
          where: { id: transfer.vehicleId },
          data: { ownerId: transfer.recipientId },
        })
      }

      return await prisma.vehicleTransfer.update({
        where: { id: transferId },
        data: { status, responseDate: new Date() },
      })
    })
  }),
})
