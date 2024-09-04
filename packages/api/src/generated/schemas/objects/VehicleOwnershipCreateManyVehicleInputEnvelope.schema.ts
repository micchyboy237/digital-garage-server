import { z } from "zod"
import { VehicleOwnershipCreateManyVehicleInputObjectSchema } from "./VehicleOwnershipCreateManyVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateManyVehicleInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleOwnershipCreateManyVehicleInputObjectSchema),
      z.lazy(() => VehicleOwnershipCreateManyVehicleInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleOwnershipCreateManyVehicleInputEnvelopeObjectSchema = Schema
