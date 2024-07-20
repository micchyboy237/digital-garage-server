import { z } from "zod"
import { MediaFileCreateManyDocumentInputObjectSchema } from "./MediaFileCreateManyDocumentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateManyDocumentInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MediaFileCreateManyDocumentInputObjectSchema),
      z.lazy(() => MediaFileCreateManyDocumentInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const MediaFileCreateManyDocumentInputEnvelopeObjectSchema = Schema
