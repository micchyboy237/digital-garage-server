import { z } from "zod"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumTransferStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => TransferStatusSchema).optional(),
  })
  .strict()

export const EnumTransferStatusFieldUpdateOperationsInputObjectSchema = Schema
