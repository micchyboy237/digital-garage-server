import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumAccountStatusFilter> = z
  .object({
    equals: z.lazy(() => AccountStatusSchema).optional(),
    in: z.union([z.lazy(() => AccountStatusSchema).array(), z.lazy(() => AccountStatusSchema)]).optional(),
    notIn: z.union([z.lazy(() => AccountStatusSchema).array(), z.lazy(() => AccountStatusSchema)]).optional(),
    not: z.union([z.lazy(() => AccountStatusSchema), z.lazy(() => NestedEnumAccountStatusFilterObjectSchema)]).optional(),
  })
  .strict()

export const NestedEnumAccountStatusFilterObjectSchema = Schema
