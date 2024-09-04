import { z } from "zod"

export const MediaFileScalarFieldEnumSchema = z.enum([
  "id",
  "type",
  "mimeType",
  "fileName",
  "url",
  "thumbnailUrl",
  "postId",
  "ownershipId",
  "createdAt",
  "updatedAt",
])
