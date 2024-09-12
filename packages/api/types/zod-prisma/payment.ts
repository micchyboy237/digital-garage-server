import * as z from "zod"
import { PaymentStatus } from "@prisma/client"
import { CompleteSubscription, RelatedSubscriptionModel } from "./index"

export const PaymentModel = z.object({
  id: z.string(),
  price: z.number(),
  currencyCode: z.string(),
  status: z.nativeEnum(PaymentStatus),
  transactionId: z.string(),
  transactionDate: z.date(),
  subscriptionId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompletePayment extends z.infer<typeof PaymentModel> {
  subscription?: CompleteSubscription | null
}

/**
 * RelatedPaymentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPaymentModel: z.ZodSchema<CompletePayment> = z.lazy(() => PaymentModel.extend({
  subscription: RelatedSubscriptionModel.nullish(),
}))
