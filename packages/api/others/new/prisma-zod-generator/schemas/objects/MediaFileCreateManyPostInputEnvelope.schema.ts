import { z } from "zod"
import { MediaFileCreateManyPostInputObjectSchema } from "./MediaFileCreateManyPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateManyPostInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MediaFileCreateManyPostInputObjectSchema),
      z.lazy(() => MediaFileCreateManyPostInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const MediaFileCreateManyPostInputEnvelopeObjectSchema = Schema
