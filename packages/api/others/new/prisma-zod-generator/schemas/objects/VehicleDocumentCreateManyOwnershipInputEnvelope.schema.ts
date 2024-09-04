import { z } from "zod"
import { VehicleDocumentCreateManyOwnershipInputObjectSchema } from "./VehicleDocumentCreateManyOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateManyOwnershipInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleDocumentCreateManyOwnershipInputObjectSchema),
      z.lazy(() => VehicleDocumentCreateManyOwnershipInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleDocumentCreateManyOwnershipInputEnvelopeObjectSchema = Schema
