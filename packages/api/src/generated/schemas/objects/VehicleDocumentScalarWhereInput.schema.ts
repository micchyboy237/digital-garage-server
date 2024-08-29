import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VehicleDocumentScalarWhereInputObjectSchema),
        z.lazy(() => VehicleDocumentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VehicleDocumentScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VehicleDocumentScalarWhereInputObjectSchema),
        z.lazy(() => VehicleDocumentScalarWhereInputObjectSchema).array(),
      ])
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
  })
  .strict()

export const VehicleDocumentScalarWhereInputObjectSchema = Schema
