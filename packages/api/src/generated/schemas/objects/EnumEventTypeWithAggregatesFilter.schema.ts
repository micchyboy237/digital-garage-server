import { z } from "zod"
import { EventTypeSchema } from "../enums/EventType.schema"
import { NestedEnumEventTypeWithAggregatesFilterObjectSchema } from "./NestedEnumEventTypeWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedEnumEventTypeFilterObjectSchema } from "./NestedEnumEventTypeFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumEventTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => EventTypeSchema).optional(),
    in: z.union([z.lazy(() => EventTypeSchema).array(), z.lazy(() => EventTypeSchema)]).optional(),
    notIn: z.union([z.lazy(() => EventTypeSchema).array(), z.lazy(() => EventTypeSchema)]).optional(),
    not: z.union([z.lazy(() => EventTypeSchema), z.lazy(() => NestedEnumEventTypeWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumEventTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumEventTypeFilterObjectSchema).optional(),
  })
  .strict()

export const EnumEventTypeWithAggregatesFilterObjectSchema = Schema
