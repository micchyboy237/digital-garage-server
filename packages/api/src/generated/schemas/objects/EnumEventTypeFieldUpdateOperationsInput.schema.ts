import { z } from "zod"
import { EventTypeSchema } from "../enums/EventType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumEventTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => EventTypeSchema).optional(),
  })
  .strict()

export const EnumEventTypeFieldUpdateOperationsInputObjectSchema = Schema
