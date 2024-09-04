import { z } from "zod"
import { MediaFileCreateNestedOneWithoutVehicleDocumentInputObjectSchema } from "./MediaFileCreateNestedOneWithoutVehicleDocumentInput.schema"
import { VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateWithoutPostInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    file: z.lazy(() => MediaFileCreateNestedOneWithoutVehicleDocumentInputObjectSchema),
    ownership: z.lazy(() => VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentCreateWithoutPostInputObjectSchema = Schema
