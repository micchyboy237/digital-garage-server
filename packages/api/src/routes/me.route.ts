import { TRPCError } from "@trpc/server"
import {
  documentSchema,
  getVehiclePostsSchema,
  getVehicleSchema,
  postSchema,
  respondTransferSchema,
  transferSchema,
  updateVehicleSchema,
  vehicleSchema,
} from "../schemas/me.schema"
import { meService } from "../services"
import { protectedProcedure, publicProcedure, t } from "../trpc"

export const meRouter = t.router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session
  }),
  getUser: protectedProcedure.query(({ ctx }) => {
    return ctx.user
  }),
  getSubscription: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id!
    const activeSubscription = await meService.getActiveSubscription(userId)
    return activeSubscription
  }),
  // Fetch all vehicles owned by the user
  getVehicles: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id!

    return await ctx.prisma.vehicle.findMany({
      where: { ownerId: userId },
      include: { posts: true, displayPhoto: true, transfers: true },
    })
  }),
  // Fetch vehicle including posts and documents from ownership
  getVehicle: protectedProcedure.input(getVehicleSchema).query(async ({ ctx, input }) => {
    const userId = ctx.user?.id!
    console.log("Get vehicle:", userId, input.vehicleId)

    // Use the compound unique input `userId_vehicleId` for finding the ownership
    const vehicleOwnership = await ctx.prisma.ownership.findUnique({
      where: {
        userId_vehicleId: {
          userId: userId,
          vehicleId: input.vehicleId,
        },
      },
      include: {
        user: true,
        vehicle: true,
        posts: {
          include: {
            photos: true, // Include photos under each post
            documents: true, // Include documents under each post
          },
        },
        vehicleDisplayPhoto: true, // Include vehicle display photo
      },
    })

    if (!vehicleOwnership) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" })
    }

    return vehicleOwnership
  }),
  // Fetch vehicle details for the user
  getVehicleDetails: protectedProcedure.input(getVehicleSchema).query(async ({ ctx, input }) => {
    const userId = ctx.user?.id!
    const vehicle = await ctx.prisma.vehicle.findUnique({
      where: { id: input.vehicleId },
      include: { details: true },
    })

    if (!vehicle) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" })
    }

    if (vehicle.ownerId !== userId) {
      throw new TRPCError({ code: "FORBIDDEN", message: "Unauthorized to view vehicle details" })
    }

    return vehicle
  }),
  // Fetch all posts for a vehicle for the user
  getVehiclePosts: protectedProcedure.input(getVehiclePostsSchema).query(async ({ ctx, input }) => {
    const userId = ctx.user?.id!
    // Fetch the ownership record to get the ownershipId based on vehicleId and userId
    const vehicleOwnership = await ctx.prisma.ownership.findFirst({
      where: { vehicleId: input.vehicleId, userId },
    })

    if (!vehicleOwnership) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Ownership not found" })
    }

    const vehiclePosts = await ctx.prisma.vehiclePost.findMany({
      where: { ownershipId: vehicleOwnership.id, createdById: userId },
      include: { photos: true, documents: true },
    })

    return vehiclePosts
  }),

  // View past and current transfers
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
  // Add a new vehicle
  addVehicle: protectedProcedure.input(vehicleSchema).mutation(async ({ ctx, input }) => {
    const userId = ctx.user?.id!

    return await ctx.prisma.vehicle.create({
      data: {
        ...input,
        userId,
      },
    })
  }),
  // Update vehicle details
  updateVehicle: protectedProcedure.input(updateVehicleSchema).mutation(async ({ ctx, input }) => {
    const { vehicleId, ...updates } = input
    const vehicle = await ctx.prisma.vehicle.findUnique({
      where: { id: vehicleId },
    })

    if (!vehicle) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" })
    }

    const isTransferred = await ctx.prisma.vehicleTransfer.findFirst({
      where: { vehicleId, status: "ACCEPTED" },
    })

    if (vehicle.ownerId !== ctx.user?.id || isTransferred) {
      throw new TRPCError({ code: "FORBIDDEN", message: "Cannot edit transferred vehicle" })
    }

    return await ctx.prisma.vehicle.update({
      where: { id: vehicleId },
      data: updates,
    })
  }),
  // Add a new post to a vehicle
  addPost: protectedProcedure.input(postSchema).mutation(async ({ ctx, input }) => {
    const { vehicleId, ...postDetails } = input
    const vehicle = await ctx.prisma.vehicle.findUnique({
      where: { id: vehicleId },
    })

    if (!vehicle || vehicle.ownerId !== ctx.user?.id) {
      throw new TRPCError({ code: "FORBIDDEN", message: "Unauthorized to add post" })
    }

    return await ctx.prisma.vehiclePost.create({
      data: {
        ...postDetails,
        vehicleId,
        createdById: ctx.user?.id!,
      },
    })
  }),
  // Add a document to a vehicle
  addDocument: protectedProcedure.input(documentSchema).mutation(async ({ ctx, input }) => {
    const { vehicleId, ...documentDetails } = input
    const vehicle = await ctx.prisma.vehicle.findUnique({
      where: { id: vehicleId },
    })

    const isTransferred = await ctx.prisma.vehicleTransfer.findFirst({
      where: { vehicleId, status: "ACCEPTED" },
    })

    if (!vehicle || vehicle.ownerId !== ctx.user?.id || isTransferred) {
      throw new TRPCError({ code: "FORBIDDEN", message: "Cannot add documents to a transferred vehicle" })
    }

    return await ctx.prisma.vehicleDocument.create({
      data: {
        ...documentDetails,
        createdById: ctx.user?.id!,
      },
    })
  }),
  // Transfer vehicle ownership
  transferVehicle: protectedProcedure.input(transferSchema).mutation(async ({ ctx, input }) => {
    console.log("Transfer vehicle:", input)
    const { vehicleId, recipientId } = input
    const vehicle = await ctx.prisma.vehicle.findUnique({
      where: { id: vehicleId },
    })

    if (!vehicle) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" })
    }

    if (vehicle.ownerId !== ctx.user?.id) {
      throw new TRPCError({ code: "FORBIDDEN", message: "Cannot transfer this vehicle" })
    }

    // Create a transfer request
    return await ctx.prisma.vehicleTransfer.create({
      data: {
        vehicleId,
        senderId: ctx.user?.id!,
        recipientId,
        status: "REQUESTED",
      },
    })
  }),
  // Accept or reject a vehicle transfer
  respondToTransfer: protectedProcedure.input(respondTransferSchema).mutation(async ({ ctx, input }) => {
    const { transferId, status } = input
    const transfer = await ctx.prisma.vehicleTransfer.findUnique({
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
      // Update the vehicle owner
      await ctx.prisma.vehicle.update({
        where: { id: transfer.vehicleId },
        data: { ownerId: transfer.recipientId },
      })
    }

    const transferResult = await ctx.prisma.vehicleTransfer.update({
      where: { id: transferId },
      data: { status, responseDate: new Date() },
    })

    return transferResult
  }),
  // Get currently owned vehicles
  getCurrentVehicles: protectedProcedure.query(async ({ ctx }) => {}),
  // Get previously owned vehicles
  getPreviousVehicles: protectedProcedure.query(async ({ ctx }) => {}),
})
