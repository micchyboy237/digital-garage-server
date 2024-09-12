import { z } from "zod"
import { VehiclePostCreateManyOwnershipInputObjectSchema } from "./VehiclePostCreateManyOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateManyOwnershipInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehiclePostCreateManyOwnershipInputObjectSchema),
      z.lazy(() => VehiclePostCreateManyOwnershipInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehiclePostCreateManyOwnershipInputEnvelopeObjectSchema = Schema
