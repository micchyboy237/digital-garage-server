import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { AccountRelationFilterObjectSchema } from "./AccountRelationFilter.schema"
import { AccountWhereInputObjectSchema } from "./AccountWhereInput.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => SessionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    accountId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    deviceFingerprint: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    account: z.union([z.lazy(() => AccountRelationFilterObjectSchema), z.lazy(() => AccountWhereInputObjectSchema)]).optional(),
    user: z
      .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const SessionWhereInputObjectSchema = Schema
