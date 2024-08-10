import { z } from "zod"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { MediaFileUncheckedCreateNestedManyWithoutDocumentInputObjectSchema } from "./MediaFileUncheckedCreateNestedManyWithoutDocumentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUncheckedCreateWithoutVehicleEventInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => DocumentTypeSchema),
    date: z.coerce.date(),
    title: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vehicleId: z.string().optional().nullable(),
    createdById: z.string(),
    files: z.lazy(() => MediaFileUncheckedCreateNestedManyWithoutDocumentInputObjectSchema).optional(),
  })
  .strict()

export const DocumentUncheckedCreateWithoutVehicleEventInputObjectSchema = Schema
