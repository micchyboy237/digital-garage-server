import { z } from "zod"

export const SubscriptionPlanSchema = z.enum(["DAY", "WEEK", "MONTH", "YEAR"])
