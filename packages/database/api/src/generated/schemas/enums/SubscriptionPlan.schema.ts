import { z } from "zod"

export const SubscriptionPlanSchema = z.enum(["MONTHLY", "YEARLY", "WEEKLY", "CUSTOM"])
