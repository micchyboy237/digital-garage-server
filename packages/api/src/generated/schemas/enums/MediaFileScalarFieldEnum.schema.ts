import { z } from "zod"

export const MediaFileScalarFieldEnumSchema = z.enum([
  "id",
  "type",
  "mimeType",
  "url",
  "createdAt",
  "updatedAt",
  "documentId",
  "userId",
  "vehicleOwnershipId",
])
