import { z } from "zod"
import { PhotoCreateManyPostInputObjectSchema } from "./PhotoCreateManyPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoCreateManyPostInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PhotoCreateManyPostInputObjectSchema),
      z.lazy(() => PhotoCreateManyPostInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PhotoCreateManyPostInputEnvelopeObjectSchema = Schema
