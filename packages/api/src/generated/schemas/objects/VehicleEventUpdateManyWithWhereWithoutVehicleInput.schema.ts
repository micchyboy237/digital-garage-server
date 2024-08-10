import { z } from "zod"
import { VehicleEventScalarWhereInputObjectSchema } from "./VehicleEventScalarWhereInput.schema"
import { VehicleEventUpdateManyMutationInputObjectSchema } from "./VehicleEventUpdateManyMutationInput.schema"
import { VehicleEventUncheckedUpdateManyWithoutEventsInputObjectSchema } from "./VehicleEventUncheckedUpdateManyWithoutEventsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpdateManyWithWhereWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleEventScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleEventUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedUpdateManyWithoutEventsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventUpdateManyWithWhereWithoutVehicleInputObjectSchema = Schema
