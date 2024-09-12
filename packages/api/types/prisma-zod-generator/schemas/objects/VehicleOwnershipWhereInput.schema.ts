import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { MediaFileRelationFilterObjectSchema } from "./MediaFileRelationFilter.schema"
import { MediaFileWhereInputObjectSchema } from "./MediaFileWhereInput.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { VehicleRelationFilterObjectSchema } from "./VehicleRelationFilter.schema"
import { VehicleWhereInputObjectSchema } from "./VehicleWhereInput.schema"
import { VehiclePostListRelationFilterObjectSchema } from "./VehiclePostListRelationFilter.schema"
import { MediaFileListRelationFilterObjectSchema } from "./MediaFileListRelationFilter.schema"
import { VehicleDetailsRelationFilterObjectSchema } from "./VehicleDetailsRelationFilter.schema"
import { VehicleDetailsWhereInputObjectSchema } from "./VehicleDetailsWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => VehicleOwnershipWhereInputObjectSchema), z.lazy(() => VehicleOwnershipWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => VehicleOwnershipWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => VehicleOwnershipWhereInputObjectSchema), z.lazy(() => VehicleOwnershipWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    vehicleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    overview: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    isCurrentOwner: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    vehicleDisplayPhotoId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    startDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    vehicleDisplayPhoto: z
      .union([z.lazy(() => MediaFileRelationFilterObjectSchema), z.lazy(() => MediaFileWhereInputObjectSchema)])
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
    vehicleFiles: z.lazy(() => MediaFileListRelationFilterObjectSchema).optional(),
    vehicleDetails: z
      .union([z.lazy(() => VehicleDetailsRelationFilterObjectSchema), z.lazy(() => VehicleDetailsWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleOwnershipWhereInputObjectSchema = Schema
