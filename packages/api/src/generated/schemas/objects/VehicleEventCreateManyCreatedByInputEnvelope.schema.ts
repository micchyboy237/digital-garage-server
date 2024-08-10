import { z } from "zod"
import { VehicleEventCreateManyCreatedByInputObjectSchema } from "./VehicleEventCreateManyCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleEventCreateManyCreatedByInputObjectSchema),
      z.lazy(() => VehicleEventCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleEventCreateManyCreatedByInputEnvelopeObjectSchema = Schema
