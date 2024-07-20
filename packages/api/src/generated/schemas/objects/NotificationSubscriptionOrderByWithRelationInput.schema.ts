import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    userId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const NotificationSubscriptionOrderByWithRelationInputObjectSchema = Schema
