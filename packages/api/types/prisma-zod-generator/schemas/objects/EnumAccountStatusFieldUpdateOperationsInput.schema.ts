import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumAccountStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => AccountStatusSchema).optional(),
  })
  .strict()

export const EnumAccountStatusFieldUpdateOperationsInputObjectSchema = Schema
