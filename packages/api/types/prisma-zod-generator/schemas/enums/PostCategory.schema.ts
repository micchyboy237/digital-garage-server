import { z } from "zod"

export const PostCategorySchema = z.enum(["GALLERY", "HISTORY"])
