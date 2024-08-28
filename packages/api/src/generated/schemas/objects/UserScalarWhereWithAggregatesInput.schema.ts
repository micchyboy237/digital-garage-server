import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema"
import { EnumAccountStatusWithAggregatesFilterObjectSchema } from "./EnumAccountStatusWithAggregatesFilter.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    firebaseUid: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    isEmailVerified: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
    accountStatus: z
      .union([z.lazy(() => EnumAccountStatusWithAggregatesFilterObjectSchema), z.lazy(() => AccountStatusSchema)])
      .optional(),
  })
  .strict()

export const UserScalarWhereWithAggregatesInputObjectSchema = Schema
