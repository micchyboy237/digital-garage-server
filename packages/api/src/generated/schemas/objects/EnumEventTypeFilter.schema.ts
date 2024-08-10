import { z } from "zod"
import { EventTypeSchema } from "../enums/EventType.schema"
import { NestedEnumEventTypeFilterObjectSchema } from "./NestedEnumEventTypeFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumEventTypeFilter> = z
  .object({
    equals: z.lazy(() => EventTypeSchema).optional(),
    in: z.union([z.lazy(() => EventTypeSchema).array(), z.lazy(() => EventTypeSchema)]).optional(),
    notIn: z.union([z.lazy(() => EventTypeSchema).array(), z.lazy(() => EventTypeSchema)]).optional(),
    not: z.union([z.lazy(() => EventTypeSchema), z.lazy(() => NestedEnumEventTypeFilterObjectSchema)]).optional(),
  })
  .strict()

export const EnumEventTypeFilterObjectSchema = Schema
