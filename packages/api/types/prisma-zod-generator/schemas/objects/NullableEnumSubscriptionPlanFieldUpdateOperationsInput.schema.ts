import { z } from "zod"
import { SubscriptionPlanSchema } from "../enums/SubscriptionPlan.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NullableEnumSubscriptionPlanFieldUpdateOperationsInput> = z
  .object({
    set: z
      .lazy(() => SubscriptionPlanSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const NullableEnumSubscriptionPlanFieldUpdateOperationsInputObjectSchema = Schema
