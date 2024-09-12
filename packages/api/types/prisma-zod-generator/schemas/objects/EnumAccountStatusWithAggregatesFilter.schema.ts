import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { NestedEnumAccountStatusWithAggregatesFilterObjectSchema } from "./NestedEnumAccountStatusWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedEnumAccountStatusFilterObjectSchema } from "./NestedEnumAccountStatusFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumAccountStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => AccountStatusSchema).optional(),
    in: z.union([z.lazy(() => AccountStatusSchema).array(), z.lazy(() => AccountStatusSchema)]).optional(),
    notIn: z.union([z.lazy(() => AccountStatusSchema).array(), z.lazy(() => AccountStatusSchema)]).optional(),
    not: z
      .union([z.lazy(() => AccountStatusSchema), z.lazy(() => NestedEnumAccountStatusWithAggregatesFilterObjectSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumAccountStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumAccountStatusFilterObjectSchema).optional(),
  })
  .strict()

export const EnumAccountStatusWithAggregatesFilterObjectSchema = Schema
