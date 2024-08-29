import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    ownershipId: z.string().optional(),
  })
  .strict()

export const PhotoWhereUniqueInputObjectSchema = Schema
