import { z } from "zod"
import { EventTypeSchema } from "../enums/EventType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumEventTypeFilter> = z
  .object({
    equals: z.lazy(() => EventTypeSchema).optional(),
    in: z.union([z.lazy(() => EventTypeSchema).array(), z.lazy(() => EventTypeSchema)]).optional(),
    notIn: z.union([z.lazy(() => EventTypeSchema).array(), z.lazy(() => EventTypeSchema)]).optional(),
    not: z.union([z.lazy(() => EventTypeSchema), z.lazy(() => NestedEnumEventTypeFilterObjectSchema)]).optional(),
  })
  .strict()

export const NestedEnumEventTypeFilterObjectSchema = Schema
