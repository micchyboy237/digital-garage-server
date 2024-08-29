import { z } from "zod"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateManyVehicleInput> = z
  .object({
    id: z.string().optional(),
    senderId: z.string(),
    recipientId: z.string(),
    status: z.lazy(() => TransferStatusSchema).optional(),
    transferDate: z.coerce.date().optional(),
    responseDate: z.coerce.date().optional().nullable(),
    reason: z.string().optional().nullable(),
  })
  .strict()

export const VehicleTransferCreateManyVehicleInputObjectSchema = Schema
