import { z } from "zod"

export const VehicleOwnershipScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "vehicleId",
  "startDate",
  "endDate",
  "isCurrentOwner",
  "isTemporaryOwner",
  "canEditDocuments",
])
