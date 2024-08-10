import { z } from "zod"
import { EventTypeSchema } from "../enums/EventType.schema"
import { DocumentUncheckedCreateNestedManyWithoutVehicleEventInputObjectSchema } from "./DocumentUncheckedCreateNestedManyWithoutVehicleEventInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUncheckedCreateWithoutVehicleInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => EventTypeSchema),
    header: z.string(),
    description: z.string().optional().nullable(),
    date: z.coerce.date(),
    price: z.number().optional().nullable(),
    createdById: z.string().optional().nullable(),
    vehicleOwnershipId: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    documents: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutVehicleEventInputObjectSchema).optional(),
  })
  .strict()

export const VehicleEventUncheckedCreateWithoutVehicleInputObjectSchema = Schema
