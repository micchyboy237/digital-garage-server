import { z } from "zod"
import { DocumentCreateManyVehicleInputObjectSchema } from "./DocumentCreateManyVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateManyVehicleInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DocumentCreateManyVehicleInputObjectSchema),
      z.lazy(() => DocumentCreateManyVehicleInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const DocumentCreateManyVehicleInputEnvelopeObjectSchema = Schema
