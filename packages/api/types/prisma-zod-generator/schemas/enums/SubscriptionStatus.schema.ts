import { z } from "zod"

export const SubscriptionStatusSchema = z.enum(["ACTIVE", "CANCELED", "EXPIRED"])
