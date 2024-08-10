import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    subscriptionId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    trialStartDate: z.lazy(() => SortOrderSchema).optional(),
    trialEndDate: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    stripeSubscriptionId: z.lazy(() => SortOrderSchema).optional(),
    iapSubscriptionId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const UserSubscriptionMaxOrderByAggregateInputObjectSchema = Schema
