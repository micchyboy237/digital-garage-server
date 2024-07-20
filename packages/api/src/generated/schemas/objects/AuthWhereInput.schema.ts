import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => AuthWhereInputObjectSchema), z.lazy(() => AuthWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => AuthWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => AuthWhereInputObjectSchema), z.lazy(() => AuthWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    password: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    googleId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerificationCode: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerificationExpiry: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    isEmailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    user: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  })
  .strict()

export const AuthWhereInputObjectSchema = Schema
