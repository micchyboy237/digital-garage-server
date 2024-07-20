import { z } from "zod"

export const DocumentScalarFieldEnumSchema = z.enum([
  "id",
  "type",
  "displayDate",
  "header",
  "description",
  "invoiceValue",
  "createdAt",
  "updatedAt",
  "vehicleId",
  "createdById",
])
