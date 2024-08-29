import { z } from "zod"
import { VehiclePostArgsObjectSchema } from "./VehiclePostArgs.schema"
import { OwnershipArgsObjectSchema } from "./OwnershipArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoInclude> = z
  .object({
    post: z.union([z.boolean(), z.lazy(() => VehiclePostArgsObjectSchema)]).optional(),
    ownership: z.union([z.boolean(), z.lazy(() => OwnershipArgsObjectSchema)]).optional(),
  })
  .strict()

export const PhotoIncludeObjectSchema = Schema
