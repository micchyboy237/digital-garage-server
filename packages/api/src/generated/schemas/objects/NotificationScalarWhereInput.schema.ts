import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => NotificationScalarWhereInputObjectSchema),
        z.lazy(() => NotificationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => NotificationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => NotificationScalarWhereInputObjectSchema),
        z.lazy(() => NotificationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const NotificationScalarWhereInputObjectSchema = Schema
