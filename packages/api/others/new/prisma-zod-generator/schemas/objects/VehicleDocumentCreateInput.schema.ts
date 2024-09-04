import { z } from "zod"
import { MediaFileCreateNestedOneWithoutVehicleDocumentInputObjectSchema } from "./MediaFileCreateNestedOneWithoutVehicleDocumentInput.schema"
import { VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateNestedOneWithoutDocumentsInput.schema"
import { VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    file: z.lazy(() => MediaFileCreateNestedOneWithoutVehicleDocumentInputObjectSchema),
    post: z.lazy(() => VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema).optional(),
    ownership: z.lazy(() => VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentCreateInputObjectSchema = Schema
