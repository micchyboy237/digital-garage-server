import { z } from "zod"
import { VehiclePostUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema } from "./VehiclePostUncheckedCreateNestedManyWithoutOwnershipInput.schema"
import { MediaFileUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateNestedManyWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    vehicleId: z.string(),
    isCurrentOwner: z.boolean().optional(),
    vehicleDisplayPhotoId: z.string().optional().nullable(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    posts: z.lazy(() => VehiclePostUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema).optional(),
    vehicleFiles: z.lazy(() => MediaFileUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInputObjectSchema = Schema
