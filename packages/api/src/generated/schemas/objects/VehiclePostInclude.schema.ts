import { z } from "zod"
import { MediaFileFindManySchema } from "../findManyMediaFile.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleOwnershipArgsObjectSchema } from "./VehicleOwnershipArgs.schema"
import { VehiclePostCountOutputTypeArgsObjectSchema } from "./VehiclePostCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostInclude> = z
  .object({
    files: z.union([z.boolean(), z.lazy(() => MediaFileFindManySchema)]).optional(),
    createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    ownership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehiclePostCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehiclePostIncludeObjectSchema = Schema
