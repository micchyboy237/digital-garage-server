import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateManyPostInput> = z
  .object({
    id: z.string().optional(),
    fileUrl: z.string(),
    mimeType: z.string(),
    ownershipId: z.string().optional().nullable(),
  })
  .strict()

export const VehicleDocumentCreateManyPostInputObjectSchema = Schema
