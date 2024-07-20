import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    url: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    documentId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const MediaFileCountAggregateInputObjectSchema = Schema
