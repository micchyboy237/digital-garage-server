import { z } from "zod"
import { MediaFileFindManySchema } from "../findManyMediaFile.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleOwnershipArgsObjectSchema } from "./VehicleOwnershipArgs.schema"
import { VehiclePostCountOutputTypeArgsObjectSchema } from "./VehiclePostCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    category: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    files: z.union([z.boolean(), z.lazy(() => MediaFileFindManySchema)]).optional(),
    createdById: z.boolean().optional(),
    createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    ownershipId: z.boolean().optional(),
    ownership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehiclePostCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehiclePostSelectObjectSchema = Schema
