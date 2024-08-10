import { z } from "zod"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { PaymentUncheckedCreateNestedManyWithoutUserSubscriptionInputObjectSchema } from "./PaymentUncheckedCreateNestedManyWithoutUserSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUncheckedCreateWithoutSubscriptionInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    status: z.lazy(() => SubscriptionStatusSchema).optional(),
    trialStartDate: z.coerce.date().optional().nullable(),
    trialEndDate: z.coerce.date().optional().nullable(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    stripeSubscriptionId: z.string().optional().nullable(),
    iapSubscriptionId: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutUserSubscriptionInputObjectSchema).optional(),
  })
  .strict()

export const UserSubscriptionUncheckedCreateWithoutSubscriptionInputObjectSchema = Schema
