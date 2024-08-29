import { z } from "zod"

export const VehiclePostScalarFieldEnumSchema = z.enum([
  "id",
  "date",
  "title",
  "category",
  "description",
  "type",
  "createdById",
  "ownershipId",
])
