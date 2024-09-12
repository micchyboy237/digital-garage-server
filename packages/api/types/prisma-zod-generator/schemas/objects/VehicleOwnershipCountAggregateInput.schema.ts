import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    vehicleId: z.literal(true).optional(),
    overview: z.literal(true).optional(),
    isCurrentOwner: z.literal(true).optional(),
    vehicleDisplayPhotoId: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const VehicleOwnershipCountAggregateInputObjectSchema = Schema
