import { z } from "zod"
import { VehicleOwnershipUserIdVehicleIdCompoundUniqueInputObjectSchema } from "./VehicleOwnershipUserIdVehicleIdCompoundUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    vehicleDisplayPhotoId: z.string().optional(),
    userId_vehicleId: z.lazy(() => VehicleOwnershipUserIdVehicleIdCompoundUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipWhereUniqueInputObjectSchema = Schema
