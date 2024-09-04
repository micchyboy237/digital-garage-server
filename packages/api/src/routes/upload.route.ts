import { generateThumbnail, optimizeImage } from "@boilerplate/aws"
import { MediaFileType } from "@boilerplate/database"
import { TRPCError } from "@trpc/server"
import { RequestHandler } from "express"
import multer from "multer"
import { z } from "zod"
import { ValidationException } from "../exceptions"
import { protectedProcedure, t } from "../trpc"

// Define schema for vehicle details input validation
const uploadVehicleDetailsSchema = z.object({
  id: z.string(),
  fromApi: z.boolean(),
  registrationNumber: z.string(),
  make: z.string(),
  model: z.string(),
  colour: z.string(),
  yearOfManufacture: z.number().int(),
  taxStatus: z.string(),
  taxDueDate: z.date(),
  motStatus: z.string(),
  motExpiryDate: z.date().nullable(),
  engineCapacity: z.number().int().nullable(),
  co2Emissions: z.number().int().nullable(),
  fuelType: z.string().nullable(),
  markedForExport: z.boolean().nullable(),
  typeApproval: z.string().nullable(),
  wheelplan: z.string().nullable(),
  artEndDate: z.date().nullable(),
  monthOfFirstRegistration: z.date().nullable(),
  euroStatus: z.string().nullable(),
  dateOfLastV5CIssued: z.date().nullable(),
  realDrivingEmissions: z.string().nullable(),
  revenueWeight: z.number().int().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

// Multer middleware for handling single file uploads
export const uploadSingle: RequestHandler = multer().single("displayPhoto")

// Define type for Multer file to ensure type safety
interface MulterFile {
  originalname: string
  buffer: Buffer
  mimetype: string
}

// Create a tRPC router with file upload handling and transactions
export const uploadRouter = t.router({
  uploadVehicleDetails: protectedProcedure.input(uploadVehicleDetailsSchema).mutation(async ({ input, ctx }) => {
    try {
      // Handle file upload using Multer
      await new Promise<void>((resolve, reject) => {
        uploadSingle(ctx.req, ctx.res, (err) => {
          if (err) {
            return reject(new TRPCError({ code: "BAD_REQUEST", message: "Error uploading file" }))
          }
          resolve()
        })
      })

      const { file } = ctx.req as { file: MulterFile | undefined } // Ensure type safety for req file
      const { registrationNumber } = input

      if (!file) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "No file uploaded" })
      }

      // Optimize image and generate thumbnail separately
      const imageUrl = await optimizeImage(file.buffer, file.originalname)
      const thumbnailUrl = await generateThumbnail(file.buffer, file.originalname)

      // Perform a transaction to save vehicle details and image URLs using Prisma
      const vehicle = await ctx.prisma.$transaction(async (prisma) => {
        const createdVehicle = await prisma.vehicle.create({
          data: {
            make: input.make,
            model: input.model,
            registrationNumber,
            ownerId: ctx.session?.userId!,
            createdAt: input.createdAt,
            updatedAt: input.updatedAt,
          },
        })

        await prisma.mediaFile.create({
          data: {
            url: imageUrl,
            thumbnailUrl,
            type: MediaFileType.IMAGE,
            mimeType: file.mimetype,
          },
        })

        await prisma.ownership.create({
          data: {
            userId: ctx.session?.userId!,
            vehicleId: createdVehicle.id,
          },
        })

        return createdVehicle
      })

      return { success: true, vehicle }
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      console.error("Error uploading to S3 or saving to database:", error)
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Error processing request" })
    }
  }),
})
