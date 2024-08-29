import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => OwnershipScalarWhereInputObjectSchema), z.lazy(() => OwnershipScalarWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => OwnershipScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => OwnershipScalarWhereInputObjectSchema), z.lazy(() => OwnershipScalarWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    vehicleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    isCurrentOwner: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    startDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    excludedPosts: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    excludedPhotos: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    excludedDocs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict()

export const OwnershipScalarWhereInputObjectSchema = Schema
