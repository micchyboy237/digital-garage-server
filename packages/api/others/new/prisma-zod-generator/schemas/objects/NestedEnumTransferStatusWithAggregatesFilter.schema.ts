import { z } from "zod"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedEnumTransferStatusFilterObjectSchema } from "./NestedEnumTransferStatusFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumTransferStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => TransferStatusSchema).optional(),
    in: z.union([z.lazy(() => TransferStatusSchema).array(), z.lazy(() => TransferStatusSchema)]).optional(),
    notIn: z.union([z.lazy(() => TransferStatusSchema).array(), z.lazy(() => TransferStatusSchema)]).optional(),
    not: z
      .union([z.lazy(() => TransferStatusSchema), z.lazy(() => NestedEnumTransferStatusWithAggregatesFilterObjectSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumTransferStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumTransferStatusFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumTransferStatusWithAggregatesFilterObjectSchema = Schema
