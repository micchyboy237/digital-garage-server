import { z } from "zod"
import { DocumentCreateManyVehicleEventInputObjectSchema } from "./DocumentCreateManyVehicleEventInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateManyVehicleEventInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DocumentCreateManyVehicleEventInputObjectSchema),
      z.lazy(() => DocumentCreateManyVehicleEventInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const DocumentCreateManyVehicleEventInputEnvelopeObjectSchema = Schema
