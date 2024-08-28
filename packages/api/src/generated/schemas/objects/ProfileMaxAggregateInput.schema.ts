import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.ProfileMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    profilePicture: z.literal(true).optional(),
    location: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict()

export const ProfileMaxAggregateInputObjectSchema = Schema
