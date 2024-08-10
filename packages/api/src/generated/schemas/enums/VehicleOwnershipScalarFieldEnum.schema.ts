import { z } from "zod"

export const VehicleOwnershipScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "vehicleId",
  "description",
  "startDate",
  "endDate",
  "isCurrentOwner",
  "isTemporaryOwner",
  "canEditDocuments",
  "createdAt",
  "updatedAt",
])
