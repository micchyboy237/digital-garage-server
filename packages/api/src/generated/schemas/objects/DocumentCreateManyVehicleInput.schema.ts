import { z } from "zod"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateManyVehicleInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => DocumentTypeSchema),
    displayDate: z.coerce.date(),
    header: z.string(),
    description: z.string(),
    invoiceValue: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    createdById: z.string(),
  })
  .strict()

export const DocumentCreateManyVehicleInputObjectSchema = Schema
