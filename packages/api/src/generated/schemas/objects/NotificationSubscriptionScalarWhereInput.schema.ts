import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => NotificationSubscriptionScalarWhereInputObjectSchema),
        z.lazy(() => NotificationSubscriptionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => NotificationSubscriptionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => NotificationSubscriptionScalarWhereInputObjectSchema),
        z.lazy(() => NotificationSubscriptionScalarWhereInputObjectSchema).array(),
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
  })
  .strict()

export const NotificationSubscriptionScalarWhereInputObjectSchema = Schema
