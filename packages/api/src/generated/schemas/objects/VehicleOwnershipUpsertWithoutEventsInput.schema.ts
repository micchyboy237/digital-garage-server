import { z } from "zod"
import { VehicleOwnershipUpdateWithoutEventsInputObjectSchema } from "./VehicleOwnershipUpdateWithoutEventsInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutEventsInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutEventsInput.schema"
import { VehicleOwnershipCreateWithoutEventsInputObjectSchema } from "./VehicleOwnershipCreateWithoutEventsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutEventsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutEventsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpsertWithoutEventsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutEventsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutEventsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutEventsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpsertWithoutEventsInputObjectSchema = Schema
