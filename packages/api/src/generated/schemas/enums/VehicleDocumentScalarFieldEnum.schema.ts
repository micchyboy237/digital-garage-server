import { z } from "zod"

export const VehicleDocumentScalarFieldEnumSchema = z.enum(["id", "fileUrl", "mimeType", "postId", "ownershipId"])
