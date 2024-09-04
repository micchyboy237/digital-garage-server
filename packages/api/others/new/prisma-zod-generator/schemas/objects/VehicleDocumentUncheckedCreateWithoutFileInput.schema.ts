import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUncheckedCreateWithoutFileInput> = z
  .object({
    id: z.string().optional(),
    postId: z.string().optional().nullable(),
    ownershipId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VehicleDocumentUncheckedCreateWithoutFileInputObjectSchema = Schema
