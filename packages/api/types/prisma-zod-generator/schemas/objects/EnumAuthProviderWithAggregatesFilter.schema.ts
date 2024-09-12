import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { NestedEnumAuthProviderWithAggregatesFilterObjectSchema } from "./NestedEnumAuthProviderWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedEnumAuthProviderFilterObjectSchema } from "./NestedEnumAuthProviderFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumAuthProviderWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => AuthProviderSchema).optional(),
    in: z.union([z.lazy(() => AuthProviderSchema).array(), z.lazy(() => AuthProviderSchema)]).optional(),
    notIn: z.union([z.lazy(() => AuthProviderSchema).array(), z.lazy(() => AuthProviderSchema)]).optional(),
    not: z
      .union([z.lazy(() => AuthProviderSchema), z.lazy(() => NestedEnumAuthProviderWithAggregatesFilterObjectSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumAuthProviderFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumAuthProviderFilterObjectSchema).optional(),
  })
  .strict()

export const EnumAuthProviderWithAggregatesFilterObjectSchema = Schema
