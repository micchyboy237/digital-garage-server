import { z } from "zod"

export const SubscriptionScalarFieldEnumSchema = z.enum([
  "id",
  "productId",
  "plan",
  "status",
  "startDate",
  "endDate",
  "expiresAt",
  "userId",
])
