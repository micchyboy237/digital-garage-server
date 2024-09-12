import { z } from "zod"
import { VehicleTransferCreateManyVehicleInputObjectSchema } from "./VehicleTransferCreateManyVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateManyVehicleInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleTransferCreateManyVehicleInputObjectSchema),
      z.lazy(() => VehicleTransferCreateManyVehicleInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleTransferCreateManyVehicleInputEnvelopeObjectSchema = Schema
