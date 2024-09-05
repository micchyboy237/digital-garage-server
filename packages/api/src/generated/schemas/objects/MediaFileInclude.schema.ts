import { z } from "zod"
import { VehiclePostArgsObjectSchema } from "./VehiclePostArgs.schema"
import { VehicleOwnershipArgsObjectSchema } from "./VehicleOwnershipArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileInclude> = z
  .object({
    post: z.union([z.boolean(), z.lazy(() => VehiclePostArgsObjectSchema)]).optional(),
    displayPhotoOwnership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
    ownership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
  })
  .strict()

export const MediaFileIncludeObjectSchema = Schema
