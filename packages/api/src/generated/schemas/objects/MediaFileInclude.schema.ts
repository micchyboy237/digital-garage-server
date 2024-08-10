import { z } from "zod"
import { DocumentArgsObjectSchema } from "./DocumentArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleOwnershipArgsObjectSchema } from "./VehicleOwnershipArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileInclude> = z
  .object({
    document: z.union([z.boolean(), z.lazy(() => DocumentArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicleOwnership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
  })
  .strict()

export const MediaFileIncludeObjectSchema = Schema
