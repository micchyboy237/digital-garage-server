import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    mimeType: z.literal(true).optional(),
    fileName: z.literal(true).optional(),
    url: z.literal(true).optional(),
    thumbnailUrl: z.literal(true).optional(),
    postId: z.literal(true).optional(),
    ownershipId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const MediaFileCountAggregateInputObjectSchema = Schema
