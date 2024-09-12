import { z } from "zod"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => SubscriptionStatusSchema).optional(),
  })
  .strict()

export const EnumSubscriptionStatusFieldUpdateOperationsInputObjectSchema = Schema
