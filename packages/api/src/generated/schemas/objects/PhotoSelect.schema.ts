import { z } from "zod"
import { VehiclePostArgsObjectSchema } from "./VehiclePostArgs.schema"
import { OwnershipArgsObjectSchema } from "./OwnershipArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoSelect> = z
  .object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    thumbnailUrl: z.boolean().optional(),
    postId: z.boolean().optional(),
    post: z.union([z.boolean(), z.lazy(() => VehiclePostArgsObjectSchema)]).optional(),
    ownershipId: z.boolean().optional(),
    ownership: z.union([z.boolean(), z.lazy(() => OwnershipArgsObjectSchema)]).optional(),
  })
  .strict()

export const PhotoSelectObjectSchema = Schema
