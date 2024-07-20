import { z } from "zod"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { SubscriptionCreateNestedOneWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionCreateNestedOneWithoutUserSubscriptionsInput.schema"
import { UserCreateNestedOneWithoutSubscriptionInputObjectSchema } from "./UserCreateNestedOneWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionCreateWithoutPaymentsInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => SubscriptionStatusSchema).optional(),
    trialStartDate: z.coerce.date().optional().nullable(),
    trialEndDate: z.coerce.date().optional().nullable(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    stripeSubscriptionId: z.string().optional().nullable(),
    iapSubscriptionId: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    subscription: z.lazy(() => SubscriptionCreateNestedOneWithoutUserSubscriptionsInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutSubscriptionInputObjectSchema),
  })
  .strict()

export const UserSubscriptionCreateWithoutPaymentsInputObjectSchema = Schema
