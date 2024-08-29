import { z } from "zod"
import { OwnershipCreateManyVehicleInputObjectSchema } from "./OwnershipCreateManyVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateManyVehicleInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => OwnershipCreateManyVehicleInputObjectSchema),
      z.lazy(() => OwnershipCreateManyVehicleInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const OwnershipCreateManyVehicleInputEnvelopeObjectSchema = Schema
