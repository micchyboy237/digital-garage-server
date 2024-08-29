import { z } from "zod"
import { OwnershipCreateManyUserInputObjectSchema } from "./OwnershipCreateManyUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => OwnershipCreateManyUserInputObjectSchema),
      z.lazy(() => OwnershipCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const OwnershipCreateManyUserInputEnvelopeObjectSchema = Schema
