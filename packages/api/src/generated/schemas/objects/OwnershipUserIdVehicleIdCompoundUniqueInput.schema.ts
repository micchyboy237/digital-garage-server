import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUserIdVehicleIdCompoundUniqueInput> = z
  .object({
    userId: z.string(),
    vehicleId: z.string(),
  })
  .strict()

export const OwnershipUserIdVehicleIdCompoundUniqueInputObjectSchema = Schema
