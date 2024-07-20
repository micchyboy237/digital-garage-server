import { z } from "zod"
import { DocumentArgsObjectSchema } from "./DocumentArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileSelect> = z
  .object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    url: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    document: z.union([z.boolean(), z.lazy(() => DocumentArgsObjectSchema)]).optional(),
    documentId: z.boolean().optional(),
  })
  .strict()

export const MediaFileSelectObjectSchema = Schema
