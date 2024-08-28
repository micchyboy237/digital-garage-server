import { z } from "zod"
import { SubscriptionPlanSchema } from "../enums/SubscriptionPlan.schema"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { PaymentUncheckedCreateNestedManyWithoutSubscriptionInputObjectSchema } from "./PaymentUncheckedCreateNestedManyWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    plan: z
      .lazy(() => SubscriptionPlanSchema)
      .optional()
      .nullable(),
    status: z.lazy(() => SubscriptionStatusSchema).optional(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutSubscriptionInputObjectSchema).optional(),
  })
  .strict()

export const SubscriptionUncheckedCreateWithoutUserInputObjectSchema = Schema
