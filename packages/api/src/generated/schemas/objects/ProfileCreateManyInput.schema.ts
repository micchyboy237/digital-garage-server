import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.ProfileCreateManyInput> = z
  .object({
    id: z.string().optional(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    profilePicture: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    userId: z.string(),
  })
  .strict()

export const ProfileCreateManyInputObjectSchema = Schema
