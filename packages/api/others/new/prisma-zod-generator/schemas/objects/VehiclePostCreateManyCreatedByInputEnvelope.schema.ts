import { z } from "zod"
import { VehiclePostCreateManyCreatedByInputObjectSchema } from "./VehiclePostCreateManyCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehiclePostCreateManyCreatedByInputObjectSchema),
      z.lazy(() => VehiclePostCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehiclePostCreateManyCreatedByInputEnvelopeObjectSchema = Schema
