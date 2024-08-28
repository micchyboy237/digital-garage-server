import { z } from "zod"

export const PaymentScalarFieldEnumSchema = z.enum([
  "id",
  "price",
  "currencyCode",
  "status",
  "transactionId",
  "transactionDate",
  "subscriptionId",
])
