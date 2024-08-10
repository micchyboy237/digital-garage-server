import { z } from "zod"
import { EventTypeSchema } from "../enums/EventType.schema"
import { DocumentCreateNestedManyWithoutVehicleEventInputObjectSchema } from "./DocumentCreateNestedManyWithoutVehicleEventInput.schema"
import { VehicleCreateNestedOneWithoutEventsInputObjectSchema } from "./VehicleCreateNestedOneWithoutEventsInput.schema"
import { VehicleOwnershipCreateNestedOneWithoutEventsInputObjectSchema } from "./VehicleOwnershipCreateNestedOneWithoutEventsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCreateWithoutCreatedByInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => EventTypeSchema),
    header: z.string(),
    description: z.string().optional().nullable(),
    date: z.coerce.date(),
    price: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    documents: z.lazy(() => DocumentCreateNestedManyWithoutVehicleEventInputObjectSchema).optional(),
    vehicle: z.lazy(() => VehicleCreateNestedOneWithoutEventsInputObjectSchema).optional(),
    vehicleOwnership: z.lazy(() => VehicleOwnershipCreateNestedOneWithoutEventsInputObjectSchema).optional(),
  })
  .strict()

export const VehicleEventCreateWithoutCreatedByInputObjectSchema = Schema
