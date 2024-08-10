import { z } from "zod"

export const EventTypeSchema = z.enum(["post", "reminder", "invoice", "document"])
