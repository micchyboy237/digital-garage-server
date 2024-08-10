import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { MediaFileRelationFilterObjectSchema } from "./MediaFileRelationFilter.schema"
import { MediaFileWhereInputObjectSchema } from "./MediaFileWhereInput.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { VehicleRelationFilterObjectSchema } from "./VehicleRelationFilter.schema"
import { VehicleWhereInputObjectSchema } from "./VehicleWhereInput.schema"
import { VehicleEventListRelationFilterObjectSchema } from "./VehicleEventListRelationFilter.schema"

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
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    startDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    isCurrentOwner: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    isTemporaryOwner: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    canEditDocuments: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    displayPicture: z
      .union([z.lazy(() => MediaFileRelationFilterObjectSchema), z.lazy(() => MediaFileWhereInputObjectSchema)])
      .optional()
      .nullable(),
    user: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
    vehicle: z.union([z.lazy(() => VehicleRelationFilterObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema)]).optional(),
    events: z.lazy(() => VehicleEventListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipWhereInputObjectSchema = Schema
