import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { VehicleOwnershipListRelationFilterObjectSchema } from "./VehicleOwnershipListRelationFilter.schema"
import { VehicleTransferListRelationFilterObjectSchema } from "./VehicleTransferListRelationFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => VehicleWhereInputObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => VehicleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => VehicleWhereInputObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    make: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    registrationNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    ownerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    owner: z
      .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
      .optional()
      .nullable(),
    ownerships: z.lazy(() => VehicleOwnershipListRelationFilterObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const VehicleWhereInputObjectSchema = Schema
