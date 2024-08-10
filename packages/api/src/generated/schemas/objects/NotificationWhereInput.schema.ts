import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => NotificationWhereInputObjectSchema), z.lazy(() => NotificationWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => NotificationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => NotificationWhereInputObjectSchema), z.lazy(() => NotificationWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    user: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  })
  .strict()

export const NotificationWhereInputObjectSchema = Schema
