import { z } from "zod"
import { VehicleCreateNestedOneWithoutOwnershipHistoryInputObjectSchema } from "./VehicleCreateNestedOneWithoutOwnershipHistoryInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    isCurrentOwner: z.boolean().optional(),
    isTemporaryOwner: z.boolean().optional(),
    canEditDocuments: z.boolean().optional(),
    vehicle: z.lazy(() => VehicleCreateNestedOneWithoutOwnershipHistoryInputObjectSchema),
  })
  .strict()

export const VehicleOwnershipCreateWithoutUserInputObjectSchema = Schema
