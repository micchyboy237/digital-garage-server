import { z } from "zod"
import { DocumentCreateManyCreatedByInputObjectSchema } from "./DocumentCreateManyCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DocumentCreateManyCreatedByInputObjectSchema),
      z.lazy(() => DocumentCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const DocumentCreateManyCreatedByInputEnvelopeObjectSchema = Schema
