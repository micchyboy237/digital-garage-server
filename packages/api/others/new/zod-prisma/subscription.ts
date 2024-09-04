import * as z from "zod"
import * as imports from "../../../../database/null"
import { SubscriptionPlan, SubscriptionStatus } from "@prisma/client"
import { CompleteUser, RelatedUserModel, CompletePayment, RelatedPaymentModel } from "./index"

export const SubscriptionModel = z.object({
  id: z.string(),
  productId: z.string(),
  plan: z.nativeEnum(SubscriptionPlan).nullish(),
  status: z.nativeEnum(SubscriptionStatus),
  startDate: z.date().nullish(),
  endDate: z.date().nullish(),
  expiresAt: z.date().nullish(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteSubscription extends z.infer<typeof SubscriptionModel> {
  user?: CompleteUser | null
  payments: CompletePayment[]
}

/**
 * RelatedSubscriptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSubscriptionModel: z.ZodSchema<CompleteSubscription> = z.lazy(() => SubscriptionModel.extend({
  user: RelatedUserModel.nullish(),
  payments: RelatedPaymentModel.array(),
}))
