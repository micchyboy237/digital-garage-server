import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { VehicleRelationFilterObjectSchema } from "./VehicleRelationFilter.schema"
import { VehicleWhereInputObjectSchema } from "./VehicleWhereInput.schema"

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
    user: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
    vehicle: z.union([z.lazy(() => VehicleRelationFilterObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema)]).optional(),
  })
  .strict()

export const VehicleOwnershipWhereInputObjectSchema = Schema
