import { z } from "zod"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferInclude> = z
  .object({
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    sender: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    recipient: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleTransferIncludeObjectSchema = Schema
