import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileMaxAggregateInputType> = z
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
  })
  .strict()

export const MediaFileMaxAggregateInputObjectSchema = Schema
