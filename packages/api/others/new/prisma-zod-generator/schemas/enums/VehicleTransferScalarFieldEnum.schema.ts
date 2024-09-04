import { z } from "zod"

export const VehicleTransferScalarFieldEnumSchema = z.enum([
  "id",
  "vehicleId",
  "senderId",
  "recipientId",
  "status",
  "transferDate",
  "responseDate",
  "reason",
  "excludedPhotos",
  "excludedVideos",
  "excludedDocs",
  "createdAt",
  "updatedAt",
])
