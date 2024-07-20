import { z } from "zod"

export const MediaFileScalarFieldEnumSchema = z.enum(["id", "type", "url", "createdAt", "updatedAt", "documentId"])
