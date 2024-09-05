import { z } from "zod"
import { MediaFileUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateNestedManyWithoutOwnershipInput.schema"
import { VehicleDetailsUncheckedCreateNestedOneWithoutOwnershipInputObjectSchema } from "./VehicleDetailsUncheckedCreateNestedOneWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedCreateWithoutPostsInput> = z
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
    vehicleFiles: z.lazy(() => MediaFileUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema).optional(),
    vehicleDetails: z.lazy(() => VehicleDetailsUncheckedCreateNestedOneWithoutOwnershipInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipUncheckedCreateWithoutPostsInputObjectSchema = Schema
