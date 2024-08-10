import { z } from "zod"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUncheckedCreateWithoutFilesInput> = z
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
    vehicleEventId: z.string().optional().nullable(),
  })
  .strict()

export const DocumentUncheckedCreateWithoutFilesInputObjectSchema = Schema
