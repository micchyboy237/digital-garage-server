import { z } from "zod"
import { MediaFileCreateNestedOneWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileCreateNestedOneWithoutVehicleOwnershipInput.schema"
import { UserCreateNestedOneWithoutVehicleOwnershipsInputObjectSchema } from "./UserCreateNestedOneWithoutVehicleOwnershipsInput.schema"
import { VehicleEventCreateNestedManyWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventCreateNestedManyWithoutVehicleOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateWithoutVehicleInput> = z
  .object({
    id: z.string().optional(),
    description: z.string().optional().nullable(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    isCurrentOwner: z.boolean().optional(),
    isTemporaryOwner: z.boolean().optional(),
    canEditDocuments: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    displayPicture: z.lazy(() => MediaFileCreateNestedOneWithoutVehicleOwnershipInputObjectSchema).optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVehicleOwnershipsInputObjectSchema),
    events: z.lazy(() => VehicleEventCreateNestedManyWithoutVehicleOwnershipInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCreateWithoutVehicleInputObjectSchema = Schema
