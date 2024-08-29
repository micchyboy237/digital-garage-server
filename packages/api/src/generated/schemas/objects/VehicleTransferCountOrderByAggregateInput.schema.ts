import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    senderId: z.lazy(() => SortOrderSchema).optional(),
    recipientId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    transferDate: z.lazy(() => SortOrderSchema).optional(),
    responseDate: z.lazy(() => SortOrderSchema).optional(),
    reason: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const VehicleTransferCountOrderByAggregateInputObjectSchema = Schema
