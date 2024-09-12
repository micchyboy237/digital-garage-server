import { z } from "zod"
import { MediaFileCreateManyOwnershipInputObjectSchema } from "./MediaFileCreateManyOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateManyOwnershipInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MediaFileCreateManyOwnershipInputObjectSchema),
      z.lazy(() => MediaFileCreateManyOwnershipInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const MediaFileCreateManyOwnershipInputEnvelopeObjectSchema = Schema
