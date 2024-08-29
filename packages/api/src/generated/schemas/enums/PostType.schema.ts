import { z } from "zod"

export const PostTypeSchema = z.enum(["REMINDER", "INVOICE", "DOCUMENT"])
