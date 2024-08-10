import { z } from "zod"

export const DocumentScalarFieldEnumSchema = z.enum([
  "id",
  "type",
  "date",
  "title",
  "description",
  "createdAt",
  "updatedAt",
  "vehicleId",
  "createdById",
  "vehicleEventId",
])
