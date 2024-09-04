import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    fileId: z.string(),
    postId: z.string().optional().nullable(),
    ownershipId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VehicleDocumentUncheckedCreateInputObjectSchema = Schema
