import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    fileUrl: z.literal(true).optional(),
    mimeType: z.literal(true).optional(),
    postId: z.literal(true).optional(),
    ownershipId: z.literal(true).optional(),
  })
  .strict()

export const VehicleDocumentMaxAggregateInputObjectSchema = Schema
