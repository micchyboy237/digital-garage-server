import { z } from "zod"

export const vehicleSchema = z.object({
  brand: z.string(),
  model: z.string(),
  plateNumber: z.string(),
  displayPhotoId: z.string().optional(),
})

export const updateVehicleSchema = z.object({
  vehicleId: z.string(),
  brand: z.string().optional(),
  model: z.string().optional(),
  plateNumber: z.string().optional(),
})

export const postSchema = z.object({
  vehicleId: z.string(),
  date: z.date(),
  title: z.string(),
  description: z.string().optional(),
  photoIds: z.array(z.string()).optional(),
  documentIds: z.array(z.string()).optional(),
})

export const documentSchema = z.object({
  vehicleId: z.string(),
  type: z.string(),
  fileUrl: z.string(),
  mimeType: z.string(),
})

export const getVehicleSchema = z.object({
  vehicleId: z.string(),
})

export const getVehiclePostsSchema = z.object({
  vehicleId: z.string(),
})

export const transferSchema = z.object({
  vehicleId: z.string(),
  recipientId: z.string(),
})

export const respondTransferSchema = z.object({
  transferId: z.string(),
  status: z.enum(["ACCEPTED", "REJECTED"]),
})
