import { z } from "zod"
import { UserCreateNestedOneWithoutProfileInputObjectSchema } from "./UserCreateNestedOneWithoutProfileInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.ProfileCreateInput> = z
  .object({
    id: z.string().optional(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    profilePicture: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema).optional(),
  })
  .strict()

export const ProfileCreateInputObjectSchema = Schema
