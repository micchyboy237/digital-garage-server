import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumAuthProviderFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => AuthProviderSchema).optional(),
  })
  .strict()

export const EnumAuthProviderFieldUpdateOperationsInputObjectSchema = Schema
