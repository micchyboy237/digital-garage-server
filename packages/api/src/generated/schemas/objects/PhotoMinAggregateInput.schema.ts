import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    url: z.literal(true).optional(),
    thumbnailUrl: z.literal(true).optional(),
    postId: z.literal(true).optional(),
    ownershipId: z.literal(true).optional(),
  })
  .strict()

export const PhotoMinAggregateInputObjectSchema = Schema
