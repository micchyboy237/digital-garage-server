import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateManyOwnershipInput> = z
  .object({
    id: z.string().optional(),
    fileId: z.string(),
    postId: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VehicleDocumentCreateManyOwnershipInputObjectSchema = Schema
