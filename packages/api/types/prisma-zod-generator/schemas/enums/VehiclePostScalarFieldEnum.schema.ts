import { z } from "zod"

export const VehiclePostScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "category",
  "description",
  "type",
  "createdById",
  "ownershipId",
  "createdAt",
  "updatedAt",
])
