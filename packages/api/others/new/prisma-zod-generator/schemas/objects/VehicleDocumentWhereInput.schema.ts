import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { MediaFileRelationFilterObjectSchema } from "./MediaFileRelationFilter.schema"
import { MediaFileWhereInputObjectSchema } from "./MediaFileWhereInput.schema"
import { VehiclePostRelationFilterObjectSchema } from "./VehiclePostRelationFilter.schema"
import { VehiclePostWhereInputObjectSchema } from "./VehiclePostWhereInput.schema"
import { VehicleOwnershipRelationFilterObjectSchema } from "./VehicleOwnershipRelationFilter.schema"
import { VehicleOwnershipWhereInputObjectSchema } from "./VehicleOwnershipWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => VehicleDocumentWhereInputObjectSchema), z.lazy(() => VehicleDocumentWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => VehicleDocumentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => VehicleDocumentWhereInputObjectSchema), z.lazy(() => VehicleDocumentWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    fileId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    postId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ownershipId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    file: z.union([z.lazy(() => MediaFileRelationFilterObjectSchema), z.lazy(() => MediaFileWhereInputObjectSchema)]).optional(),
    post: z
      .union([z.lazy(() => VehiclePostRelationFilterObjectSchema), z.lazy(() => VehiclePostWhereInputObjectSchema)])
      .optional()
      .nullable(),
    ownership: z
      .union([z.lazy(() => VehicleOwnershipRelationFilterObjectSchema), z.lazy(() => VehicleOwnershipWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleDocumentWhereInputObjectSchema = Schema
