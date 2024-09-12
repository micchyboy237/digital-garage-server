import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionDeviceFingerprintUserIdCompoundUniqueInput> = z
  .object({
    deviceFingerprint: z.string(),
    userId: z.string(),
  })
  .strict()

export const SessionDeviceFingerprintUserIdCompoundUniqueInputObjectSchema = Schema
