import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    vehicleId: z.string(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    isCurrentOwner: z.boolean().optional(),
    isTemporaryOwner: z.boolean().optional(),
    canEditDocuments: z.boolean().optional(),
  })
  .strict()

export const VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema = Schema
