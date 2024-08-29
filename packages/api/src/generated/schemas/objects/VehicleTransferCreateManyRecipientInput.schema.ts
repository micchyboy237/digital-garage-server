import { z } from "zod"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateManyRecipientInput> = z
  .object({
    id: z.string().optional(),
    vehicleId: z.string(),
    senderId: z.string(),
    status: z.lazy(() => TransferStatusSchema).optional(),
    transferDate: z.coerce.date().optional(),
    responseDate: z.coerce.date().optional().nullable(),
    reason: z.string().optional().nullable(),
  })
  .strict()

export const VehicleTransferCreateManyRecipientInputObjectSchema = Schema
