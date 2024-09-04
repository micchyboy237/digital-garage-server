import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUncheckedCreateWithoutPostInput> = z
  .object({
    id: z.string().optional(),
    fileId: z.string(),
    ownershipId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VehicleDocumentUncheckedCreateWithoutPostInputObjectSchema = Schema
