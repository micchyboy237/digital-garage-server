import { z } from "zod"
import { MediaFileCreateNestedOneWithoutVehicleDocumentInputObjectSchema } from "./MediaFileCreateNestedOneWithoutVehicleDocumentInput.schema"
import { VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema } from "./VehiclePostCreateNestedOneWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateWithoutOwnershipInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    file: z.lazy(() => MediaFileCreateNestedOneWithoutVehicleDocumentInputObjectSchema),
    post: z.lazy(() => VehiclePostCreateNestedOneWithoutDocumentsInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentCreateWithoutOwnershipInputObjectSchema = Schema
