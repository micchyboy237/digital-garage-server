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
  "excludedMediaFileTypes",
  "createdAt",
  "updatedAt",
])
