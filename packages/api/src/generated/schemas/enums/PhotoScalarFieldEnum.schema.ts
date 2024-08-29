import { z } from "zod"

export const PhotoScalarFieldEnumSchema = z.enum(["id", "url", "thumbnailUrl", "postId", "ownershipId"])
