import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    subscriptionId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    status: z.literal(true).optional(),
    trialStartDate: z.literal(true).optional(),
    trialEndDate: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    stripeSubscriptionId: z.literal(true).optional(),
    iapSubscriptionId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const UserSubscriptionCountAggregateInputObjectSchema = Schema
