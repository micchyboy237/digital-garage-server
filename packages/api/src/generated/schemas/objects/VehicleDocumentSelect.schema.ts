import { z } from "zod"
import { VehiclePostArgsObjectSchema } from "./VehiclePostArgs.schema"
import { OwnershipArgsObjectSchema } from "./OwnershipArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentSelect> = z
  .object({
    id: z.boolean().optional(),
    fileUrl: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    postId: z.boolean().optional(),
    post: z.union([z.boolean(), z.lazy(() => VehiclePostArgsObjectSchema)]).optional(),
    ownershipId: z.boolean().optional(),
    ownership: z.union([z.boolean(), z.lazy(() => OwnershipArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleDocumentSelectObjectSchema = Schema
