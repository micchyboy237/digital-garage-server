import { z } from "zod"
import { VehicleUpdateWithoutEventsInputObjectSchema } from "./VehicleUpdateWithoutEventsInput.schema"
import { VehicleUncheckedUpdateWithoutEventsInputObjectSchema } from "./VehicleUncheckedUpdateWithoutEventsInput.schema"
import { VehicleCreateWithoutEventsInputObjectSchema } from "./VehicleCreateWithoutEventsInput.schema"
import { VehicleUncheckedCreateWithoutEventsInputObjectSchema } from "./VehicleUncheckedCreateWithoutEventsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpsertWithoutEventsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleUpdateWithoutEventsInputObjectSchema),
      z.lazy(() => VehicleUncheckedUpdateWithoutEventsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutEventsInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleUpsertWithoutEventsInputObjectSchema = Schema
