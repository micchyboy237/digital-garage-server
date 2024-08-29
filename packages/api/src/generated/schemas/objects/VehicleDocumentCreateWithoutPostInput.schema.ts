import { z } from "zod"
import { OwnershipCreateNestedOneWithoutDocumentsInputObjectSchema } from "./OwnershipCreateNestedOneWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateWithoutPostInput> = z
  .object({
    id: z.string().optional(),
    fileUrl: z.string(),
    mimeType: z.string(),
    ownership: z.lazy(() => OwnershipCreateNestedOneWithoutDocumentsInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentCreateWithoutPostInputObjectSchema = Schema
