import { z } from "zod"
import { VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateNestedOneWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateWithoutOwnershipInput> = z
  .object({
    id: z.string().optional(),
    fileUrl: z.string(),
    mimeType: z.string(),
    post: z.lazy(() => VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentCreateWithoutOwnershipInputObjectSchema = Schema
