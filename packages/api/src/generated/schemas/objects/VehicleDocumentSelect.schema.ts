import { z } from "zod"
import { MediaFileArgsObjectSchema } from "./MediaFileArgs.schema"
import { VehiclePostArgsObjectSchema } from "./VehiclePostArgs.schema"
import { VehicleOwnershipArgsObjectSchema } from "./VehicleOwnershipArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentSelect> = z
  .object({
    id: z.boolean().optional(),
    fileId: z.boolean().optional(),
    file: z.union([z.boolean(), z.lazy(() => MediaFileArgsObjectSchema)]).optional(),
    postId: z.boolean().optional(),
    post: z.union([z.boolean(), z.lazy(() => VehiclePostArgsObjectSchema)]).optional(),
    ownershipId: z.boolean().optional(),
    ownership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const VehicleDocumentSelectObjectSchema = Schema
