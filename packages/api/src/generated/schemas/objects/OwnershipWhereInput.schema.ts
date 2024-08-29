import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema"
import { PhotoRelationFilterObjectSchema } from "./PhotoRelationFilter.schema"
import { PhotoWhereInputObjectSchema } from "./PhotoWhereInput.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { VehicleRelationFilterObjectSchema } from "./VehicleRelationFilter.schema"
import { VehicleWhereInputObjectSchema } from "./VehicleWhereInput.schema"
import { VehiclePostListRelationFilterObjectSchema } from "./VehiclePostListRelationFilter.schema"
import { VehicleDocumentListRelationFilterObjectSchema } from "./VehicleDocumentListRelationFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => OwnershipWhereInputObjectSchema), z.lazy(() => OwnershipWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => OwnershipWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => OwnershipWhereInputObjectSchema), z.lazy(() => OwnershipWhereInputObjectSchema).array()])
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
    vehicleDisplayPhoto: z
      .union([z.lazy(() => PhotoRelationFilterObjectSchema), z.lazy(() => PhotoWhereInputObjectSchema)])
      .optional()
      .nullable(),
    user: z
      .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
      .optional()
      .nullable(),
    vehicle: z
      .union([z.lazy(() => VehicleRelationFilterObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema)])
      .optional()
      .nullable(),
    posts: z.lazy(() => VehiclePostListRelationFilterObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const OwnershipWhereInputObjectSchema = Schema
