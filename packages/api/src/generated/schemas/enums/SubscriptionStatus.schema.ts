import { z } from "zod"

export const SubscriptionStatusSchema = z.enum(["active", "cancelled", "paused"])
