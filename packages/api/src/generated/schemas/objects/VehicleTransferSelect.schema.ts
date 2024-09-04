import { z } from "zod"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferSelect> = z
  .object({
    id: z.boolean().optional(),
    vehicleId: z.boolean().optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    senderId: z.boolean().optional(),
    sender: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    recipientId: z.boolean().optional(),
    recipient: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    status: z.boolean().optional(),
    transferDate: z.boolean().optional(),
    responseDate: z.boolean().optional(),
    reason: z.boolean().optional(),
    excludedPhotos: z.boolean().optional(),
    excludedVideos: z.boolean().optional(),
    excludedDocs: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const VehicleTransferSelectObjectSchema = Schema
