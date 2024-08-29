import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { VehiclePostRelationFilterObjectSchema } from "./VehiclePostRelationFilter.schema"
import { VehiclePostWhereInputObjectSchema } from "./VehiclePostWhereInput.schema"
import { OwnershipRelationFilterObjectSchema } from "./OwnershipRelationFilter.schema"
import { OwnershipWhereInputObjectSchema } from "./OwnershipWhereInput.schema"

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
    fileUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    mimeType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    postId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ownershipId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    post: z
      .union([z.lazy(() => VehiclePostRelationFilterObjectSchema), z.lazy(() => VehiclePostWhereInputObjectSchema)])
      .optional()
      .nullable(),
    ownership: z
      .union([z.lazy(() => OwnershipRelationFilterObjectSchema), z.lazy(() => OwnershipWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleDocumentWhereInputObjectSchema = Schema
