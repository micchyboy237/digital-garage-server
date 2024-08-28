import { z } from "zod"

export const SubscriptionScalarFieldEnumSchema = z.enum(["id", "plan", "status", "startDate", "endDate", "userId"])
