import { z } from "zod"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumTransferStatusFilter> = z
  .object({
    equals: z.lazy(() => TransferStatusSchema).optional(),
    in: z.union([z.lazy(() => TransferStatusSchema).array(), z.lazy(() => TransferStatusSchema)]).optional(),
    notIn: z.union([z.lazy(() => TransferStatusSchema).array(), z.lazy(() => TransferStatusSchema)]).optional(),
    not: z.union([z.lazy(() => TransferStatusSchema), z.lazy(() => NestedEnumTransferStatusFilterObjectSchema)]).optional(),
  })
  .strict()

export const NestedEnumTransferStatusFilterObjectSchema = Schema
