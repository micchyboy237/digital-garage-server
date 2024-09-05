import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumAuthProviderFilterObjectSchema } from "./EnumAuthProviderFilter.schema"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => AccountScalarWhereInputObjectSchema), z.lazy(() => AccountScalarWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => AccountScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => AccountScalarWhereInputObjectSchema), z.lazy(() => AccountScalarWhereInputObjectSchema).array()])
      .optional(),
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
  })
  .strict()

export const AccountScalarWhereInputObjectSchema = Schema
