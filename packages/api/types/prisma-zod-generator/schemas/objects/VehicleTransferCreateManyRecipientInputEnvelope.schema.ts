import { z } from "zod"
import { VehicleTransferCreateManyRecipientInputObjectSchema } from "./VehicleTransferCreateManyRecipientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateManyRecipientInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleTransferCreateManyRecipientInputObjectSchema),
      z.lazy(() => VehicleTransferCreateManyRecipientInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleTransferCreateManyRecipientInputEnvelopeObjectSchema = Schema
