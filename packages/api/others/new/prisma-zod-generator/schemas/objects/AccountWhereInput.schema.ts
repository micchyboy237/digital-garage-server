import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumAuthProviderFilterObjectSchema } from "./EnumAuthProviderFilter.schema"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { SessionListRelationFilterObjectSchema } from "./SessionListRelationFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => AccountWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    provider: z.union([z.lazy(() => EnumAuthProviderFilterObjectSchema), z.lazy(() => AuthProviderSchema)]).optional(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    firebaseUid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    isEmailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    lastLogin: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    user: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const AccountWhereInputObjectSchema = Schema
