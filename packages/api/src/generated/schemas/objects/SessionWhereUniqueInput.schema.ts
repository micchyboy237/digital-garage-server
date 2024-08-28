import { z } from "zod"
import { SessionDeviceFingerprintUserIdCompoundUniqueInputObjectSchema } from "./SessionDeviceFingerprintUserIdCompoundUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    token: z.string().optional(),
    deviceFingerprint: z.string().optional(),
    deviceFingerprint_userId: z.lazy(() => SessionDeviceFingerprintUserIdCompoundUniqueInputObjectSchema).optional(),
  })
  .strict()

export const SessionWhereUniqueInputObjectSchema = Schema
