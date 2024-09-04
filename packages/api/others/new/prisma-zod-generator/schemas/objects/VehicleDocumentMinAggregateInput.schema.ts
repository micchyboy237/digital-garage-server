import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    fileId: z.literal(true).optional(),
    postId: z.literal(true).optional(),
    ownershipId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const VehicleDocumentMinAggregateInputObjectSchema = Schema
