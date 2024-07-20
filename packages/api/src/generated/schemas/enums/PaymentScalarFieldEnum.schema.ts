import { z } from "zod"

export const PaymentScalarFieldEnumSchema = z.enum([
  "id",
  "amount",
  "currency",
  "paymentDate",
  "userSubscriptionId",
  "stripePaymentId",
  "iapPaymentId",
])
