import { z } from "zod"

export const VehicleDocumentScalarFieldEnumSchema = z.enum(["id", "fileId", "postId", "ownershipId", "createdAt", "updatedAt"])
