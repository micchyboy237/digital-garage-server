import { z } from "zod"
import { VehicleTransferCreateManySenderInputObjectSchema } from "./VehicleTransferCreateManySenderInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateManySenderInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleTransferCreateManySenderInputObjectSchema),
      z.lazy(() => VehicleTransferCreateManySenderInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleTransferCreateManySenderInputEnvelopeObjectSchema = Schema
