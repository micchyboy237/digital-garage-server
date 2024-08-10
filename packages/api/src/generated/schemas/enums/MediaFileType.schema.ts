import { z } from "zod"

export const MediaFileTypeSchema = z.enum(["photo", "video", "document"])
