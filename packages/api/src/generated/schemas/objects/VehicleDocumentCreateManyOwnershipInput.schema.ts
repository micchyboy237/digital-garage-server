import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateManyOwnershipInput> = z
  .object({
    id: z.string().optional(),
    fileUrl: z.string(),
    mimeType: z.string(),
    postId: z.string().optional().nullable(),
  })
  .strict()

export const VehicleDocumentCreateManyOwnershipInputObjectSchema = Schema
