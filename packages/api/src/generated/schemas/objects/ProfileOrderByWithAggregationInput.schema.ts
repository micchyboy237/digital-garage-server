import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { ProfileCountOrderByAggregateInputObjectSchema } from "./ProfileCountOrderByAggregateInput.schema"
import { ProfileMaxOrderByAggregateInputObjectSchema } from "./ProfileMaxOrderByAggregateInput.schema"
import { ProfileMinOrderByAggregateInputObjectSchema } from "./ProfileMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.ProfileOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    lastName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    profilePicture: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ProfileCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ProfileMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProfileMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const ProfileOrderByWithAggregationInputObjectSchema = Schema
