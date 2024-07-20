import { z } from "zod"

export const SubscriptionScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "freeTrialDuration",
  "price",
  "currency",
  "paymentInterval",
  "createdAt",
  "updatedAt",
])
