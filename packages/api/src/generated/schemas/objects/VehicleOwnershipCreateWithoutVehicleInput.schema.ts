import { z } from "zod"
import { MediaFileCreateNestedOneWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateNestedOneWithoutDisplayPhotoOwnershipInput.schema"
import { UserCreateNestedOneWithoutVehicleOwnershipsInputObjectSchema } from "./UserCreateNestedOneWithoutVehicleOwnershipsInput.schema"
import { VehiclePostCreateNestedManyWithoutOwnershipInputObjectSchema } from "./VehiclePostCreateNestedManyWithoutOwnershipInput.schema"
import { MediaFileCreateNestedManyWithoutOwnershipInputObjectSchema } from "./MediaFileCreateNestedManyWithoutOwnershipInput.schema"
import { VehicleDetailsCreateNestedOneWithoutOwnershipInputObjectSchema } from "./VehicleDetailsCreateNestedOneWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateWithoutVehicleInput> = z
  .object({
    id: z.string().optional(),
    isCurrentOwner: z.boolean().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vehicleDisplayPhoto: z.lazy(() => MediaFileCreateNestedOneWithoutDisplayPhotoOwnershipInputObjectSchema).optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVehicleOwnershipsInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostCreateNestedManyWithoutOwnershipInputObjectSchema).optional(),
    vehicleFiles: z.lazy(() => MediaFileCreateNestedManyWithoutOwnershipInputObjectSchema).optional(),
    vehicleDetails: z.lazy(() => VehicleDetailsCreateNestedOneWithoutOwnershipInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCreateWithoutVehicleInputObjectSchema = Schema
