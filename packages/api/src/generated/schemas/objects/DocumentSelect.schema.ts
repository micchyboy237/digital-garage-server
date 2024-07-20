import { z } from "zod"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { MediaFileFindManySchema } from "../findManyMediaFile.schema"
import { DocumentCountOutputTypeArgsObjectSchema } from "./DocumentCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentSelect> = z
  .object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    displayDate: z.boolean().optional(),
    header: z.boolean().optional(),
    description: z.boolean().optional(),
    invoiceValue: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    vehicleId: z.boolean().optional(),
    createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    createdById: z.boolean().optional(),
    files: z.union([z.boolean(), z.lazy(() => MediaFileFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DocumentCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const DocumentSelectObjectSchema = Schema
