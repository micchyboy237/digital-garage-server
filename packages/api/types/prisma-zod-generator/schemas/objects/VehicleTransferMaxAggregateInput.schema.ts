import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    vehicleId: z.literal(true).optional(),
    senderId: z.literal(true).optional(),
    recipientId: z.literal(true).optional(),
    status: z.literal(true).optional(),
    transferDate: z.literal(true).optional(),
    responseDate: z.literal(true).optional(),
    reason: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const VehicleTransferMaxAggregateInputObjectSchema = Schema
