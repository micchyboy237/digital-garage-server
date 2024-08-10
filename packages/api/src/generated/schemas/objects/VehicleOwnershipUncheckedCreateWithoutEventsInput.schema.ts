import { z } from "zod"
import { MediaFileUncheckedCreateNestedOneWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateNestedOneWithoutVehicleOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedCreateWithoutEventsInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    vehicleId: z.string(),
    description: z.string().optional().nullable(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    isCurrentOwner: z.boolean().optional(),
    isTemporaryOwner: z.boolean().optional(),
    canEditDocuments: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    displayPicture: z.lazy(() => MediaFileUncheckedCreateNestedOneWithoutVehicleOwnershipInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipUncheckedCreateWithoutEventsInputObjectSchema = Schema
