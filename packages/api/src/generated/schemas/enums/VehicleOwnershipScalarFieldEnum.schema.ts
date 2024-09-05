import { z } from "zod"

export const VehicleOwnershipScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "vehicleId",
  "isCurrentOwner",
  "vehicleDisplayPhotoId",
  "startDate",
  "endDate",
  "createdAt",
  "updatedAt",
])
