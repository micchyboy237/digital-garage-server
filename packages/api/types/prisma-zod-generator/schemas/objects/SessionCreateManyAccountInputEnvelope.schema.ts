import { z } from "zod"
import { SessionCreateManyAccountInputObjectSchema } from "./SessionCreateManyAccountInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateManyAccountInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SessionCreateManyAccountInputObjectSchema),
      z.lazy(() => SessionCreateManyAccountInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const SessionCreateManyAccountInputEnvelopeObjectSchema = Schema
