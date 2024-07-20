import { z } from "zod"

export const DocumentTypeSchema = z.enum(["post", "invoice", "reminder", "document"])
