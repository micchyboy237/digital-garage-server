import { z } from "zod"
import { PhotoFindManySchema } from "../findManyPhoto.schema"
import { VehicleDocumentFindManySchema } from "../findManyVehicleDocument.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { OwnershipArgsObjectSchema } from "./OwnershipArgs.schema"
import { VehiclePostCountOutputTypeArgsObjectSchema } from "./VehiclePostCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostSelect> = z
  .object({
    id: z.boolean().optional(),
    date: z.boolean().optional(),
    title: z.boolean().optional(),
    category: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    photos: z.union([z.boolean(), z.lazy(() => PhotoFindManySchema)]).optional(),
    documents: z.union([z.boolean(), z.lazy(() => VehicleDocumentFindManySchema)]).optional(),
    createdById: z.boolean().optional(),
    createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    ownershipId: z.boolean().optional(),
    ownership: z.union([z.boolean(), z.lazy(() => OwnershipArgsObjectSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehiclePostCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehiclePostSelectObjectSchema = Schema
