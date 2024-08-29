import { z } from "zod"
import { VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateNestedOneWithoutDocumentsInput.schema"
import { OwnershipCreateNestedOneWithoutDocumentsInputObjectSchema } from "./OwnershipCreateNestedOneWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateInput> = z
  .object({
    id: z.string().optional(),
    fileUrl: z.string(),
    mimeType: z.string(),
    post: z.lazy(() => VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema).optional(),
    ownership: z.lazy(() => OwnershipCreateNestedOneWithoutDocumentsInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentCreateInputObjectSchema = Schema
