import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { EnumAuthProviderFilterObjectSchema } from "./EnumAuthProviderFilter.schema"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => SessionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    provider: z.union([z.lazy(() => EnumAuthProviderFilterObjectSchema), z.lazy(() => AuthProviderSchema)]).optional(),
    deviceFingerprint: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const SessionScalarWhereInputObjectSchema = Schema
