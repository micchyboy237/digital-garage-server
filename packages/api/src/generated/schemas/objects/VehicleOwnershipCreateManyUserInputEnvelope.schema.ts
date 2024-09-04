import { z } from "zod"
import { VehicleOwnershipCreateManyUserInputObjectSchema } from "./VehicleOwnershipCreateManyUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleOwnershipCreateManyUserInputObjectSchema),
      z.lazy(() => VehicleOwnershipCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleOwnershipCreateManyUserInputEnvelopeObjectSchema = Schema
