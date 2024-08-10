import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => NotificationSubscriptionWhereInputObjectSchema),
        z.lazy(() => NotificationSubscriptionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => NotificationSubscriptionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => NotificationSubscriptionWhereInputObjectSchema),
        z.lazy(() => NotificationSubscriptionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    category: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    userId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    user: z
      .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const NotificationSubscriptionWhereInputObjectSchema = Schema
