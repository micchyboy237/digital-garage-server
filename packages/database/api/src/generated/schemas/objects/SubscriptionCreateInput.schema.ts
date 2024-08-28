import { z } from "zod"
import { SubscriptionPlanSchema } from "../enums/SubscriptionPlan.schema"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { UserCreateNestedOneWithoutSubscriptionInputObjectSchema } from "./UserCreateNestedOneWithoutSubscriptionInput.schema"
import { PaymentCreateNestedManyWithoutSubscriptionInputObjectSchema } from "./PaymentCreateNestedManyWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCreateInput> = z
  .object({
    id: z.string().optional(),
    plan: z
      .lazy(() => SubscriptionPlanSchema)
      .optional()
      .nullable(),
    status: z.lazy(() => SubscriptionStatusSchema).optional(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutSubscriptionInputObjectSchema).optional(),
    payments: z.lazy(() => PaymentCreateNestedManyWithoutSubscriptionInputObjectSchema).optional(),
  })
  .strict()

export const SubscriptionCreateInputObjectSchema = Schema
