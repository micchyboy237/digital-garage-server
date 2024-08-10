import { z } from "zod"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { UserCreateNestedOneWithoutDocumentsInputObjectSchema } from "./UserCreateNestedOneWithoutDocumentsInput.schema"
import { MediaFileCreateNestedManyWithoutDocumentInputObjectSchema } from "./MediaFileCreateNestedManyWithoutDocumentInput.schema"
import { VehicleEventCreateNestedOneWithoutDocumentsInputObjectSchema } from "./VehicleEventCreateNestedOneWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateWithoutVehicleInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => DocumentTypeSchema),
    date: z.coerce.date(),
    title: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    createdBy: z.lazy(() => UserCreateNestedOneWithoutDocumentsInputObjectSchema),
    files: z.lazy(() => MediaFileCreateNestedManyWithoutDocumentInputObjectSchema).optional(),
    vehicleEvent: z.lazy(() => VehicleEventCreateNestedOneWithoutDocumentsInputObjectSchema).optional(),
  })
  .strict()

export const DocumentCreateWithoutVehicleInputObjectSchema = Schema
