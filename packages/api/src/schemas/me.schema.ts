import { SubscriptionPlan, SubscriptionStatus } from "@boilerplate/database"
import { z } from "zod"
import { ErrorMessages } from "../exceptions"

export const onboardUserSchema = z.object({
  firstName: z.string().min(2, { message: ErrorMessages.FIRST_NAME_TOO_SHORT }),
  lastName: z.string().min(2, { message: ErrorMessages.LAST_NAME_TOO_SHORT }),
  location: z.string(),
  displayPicture: z.string().nullish(),
})

export const updateProfileSchema = z.object({
  firstName: z.string().min(2, { message: ErrorMessages.FIRST_NAME_TOO_SHORT }).nullish(),
  lastName: z.string().min(2, { message: ErrorMessages.LAST_NAME_TOO_SHORT }).nullish(),
  location: z.string().nullish(),
  displayPicture: z.string().nullish(),
})

export const subscribeSchema = z.object({
  productId: z.string(),
  plan: z.nativeEnum(SubscriptionPlan).nullish(),
  status: z.nativeEnum(SubscriptionStatus).nullish(),
  startDate: z.date().nullish(),
  endDate: z.date().nullish(),
  expiresAt: z.date().nullish(),
})

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

export const getVehicleOwnershipSchema = z.object({
  vehicleId: z.string(),
})

export const transferSchema = z.object({
  vehicleId: z.string(),
  recipientId: z.string(),
  excludedPhotos: z.array(z.string()).optional(),
  excludedVideos: z.array(z.string()).optional(),
  excludedDocs: z.array(z.string()).optional(),
})

export const respondTransferSchema = z.object({
  transferId: z.string(),
  status: z.enum(["ACCEPTED", "REJECTED"]),
})
