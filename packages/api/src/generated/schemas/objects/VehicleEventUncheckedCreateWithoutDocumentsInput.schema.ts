import { z } from "zod"
import { EventTypeSchema } from "../enums/EventType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUncheckedCreateWithoutDocumentsInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => EventTypeSchema),
    header: z.string(),
    description: z.string().optional().nullable(),
    date: z.coerce.date(),
    price: z.number().optional().nullable(),
    vehicleId: z.string().optional().nullable(),
    createdById: z.string().optional().nullable(),
    vehicleOwnershipId: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VehicleEventUncheckedCreateWithoutDocumentsInputObjectSchema = Schema
