import { z } from "zod"

export const UserSubscriptionScalarFieldEnumSchema = z.enum([
  "id",
  "subscriptionId",
  "userId",
  "status",
  "trialStartDate",
  "trialEndDate",
  "startDate",
  "endDate",
  "stripeSubscriptionId",
  "iapSubscriptionId",
  "createdAt",
  "updatedAt",
])
