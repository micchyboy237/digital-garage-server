import { z } from "zod"
import { VehiclePostArgsObjectSchema } from "./VehiclePostArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleOwnershipArgsObjectSchema } from "./VehicleOwnershipArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileSelect> = z
  .object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    fileName: z.boolean().optional(),
    url: z.boolean().optional(),
    thumbnailUrl: z.boolean().optional(),
    postId: z.boolean().optional(),
    post: z.union([z.boolean(), z.lazy(() => VehiclePostArgsObjectSchema)]).optional(),
    userDisplayPicture: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicleDisplayPhotoOwnership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
    ownershipId: z.boolean().optional(),
    ownership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const MediaFileSelectObjectSchema = Schema
