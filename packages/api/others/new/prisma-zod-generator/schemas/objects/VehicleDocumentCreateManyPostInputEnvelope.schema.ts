import { z } from "zod"
import { VehicleDocumentCreateManyPostInputObjectSchema } from "./VehicleDocumentCreateManyPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCreateManyPostInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VehicleDocumentCreateManyPostInputObjectSchema),
      z.lazy(() => VehicleDocumentCreateManyPostInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VehicleDocumentCreateManyPostInputEnvelopeObjectSchema = Schema
