import { z } from "zod"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleOwnershipIncludeObjectSchema = Schema
