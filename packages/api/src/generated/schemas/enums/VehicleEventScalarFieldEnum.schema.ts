import { z } from "zod"

export const VehicleEventScalarFieldEnumSchema = z.enum([
  "id",
  "type",
  "header",
  "description",
  "date",
  "price",
  "vehicleId",
  "createdById",
  "vehicleOwnershipId",
  "createdAt",
  "updatedAt",
])
