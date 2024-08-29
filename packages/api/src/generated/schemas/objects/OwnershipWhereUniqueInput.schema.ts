import { z } from "zod"
import { OwnershipUserIdVehicleIdCompoundUniqueInputObjectSchema } from "./OwnershipUserIdVehicleIdCompoundUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userId_vehicleId: z.lazy(() => OwnershipUserIdVehicleIdCompoundUniqueInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipWhereUniqueInputObjectSchema = Schema
