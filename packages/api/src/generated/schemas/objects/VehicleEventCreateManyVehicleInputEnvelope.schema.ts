import { z } from "zod"
import { VehicleEventCreateManyVehicleInputObjectSchema } from "./VehicleEventCreateManyVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCreateManyVehicleInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleEventCreateManyVehicleInputObjectSchema),
      z.lazy(() => VehicleEventCreateManyVehicleInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleEventCreateManyVehicleInputEnvelopeObjectSchema = Schema
