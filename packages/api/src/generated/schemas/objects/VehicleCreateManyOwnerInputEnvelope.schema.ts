import { z } from "zod"
import { VehicleCreateManyOwnerInputObjectSchema } from "./VehicleCreateManyOwnerInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateManyOwnerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleCreateManyOwnerInputObjectSchema),
      z.lazy(() => VehicleCreateManyOwnerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleCreateManyOwnerInputEnvelopeObjectSchema = Schema
