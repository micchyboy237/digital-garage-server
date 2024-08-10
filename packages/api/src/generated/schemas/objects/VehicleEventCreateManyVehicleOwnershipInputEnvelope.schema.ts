import { z } from "zod"
import { VehicleEventCreateManyVehicleOwnershipInputObjectSchema } from "./VehicleEventCreateManyVehicleOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCreateManyVehicleOwnershipInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleEventCreateManyVehicleOwnershipInputObjectSchema),
      z.lazy(() => VehicleEventCreateManyVehicleOwnershipInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleEventCreateManyVehicleOwnershipInputEnvelopeObjectSchema = Schema
