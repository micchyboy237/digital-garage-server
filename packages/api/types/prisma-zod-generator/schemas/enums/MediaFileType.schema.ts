import { z } from "zod"

export const MediaFileTypeSchema = z.enum(["IMAGE", "VIDEO", "DOCUMENT"])
