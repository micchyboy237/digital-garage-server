import { z } from "zod"

export const DocumentTypeSchema = z.enum(["general", "photo"])
