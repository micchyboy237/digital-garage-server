import { z } from "zod"
import { VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateNestedOneWithoutDocumentsInput.schema"
import { VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateWithoutFileInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    post: z.lazy(() => VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema).optional(),
    ownership: z.lazy(() => VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentCreateWithoutFileInputObjectSchema = Schema
