import { z } from "zod"
import { VehicleCreateWithoutEventsInputObjectSchema } from "./VehicleCreateWithoutEventsInput.schema"
import { VehicleUncheckedCreateWithoutEventsInputObjectSchema } from "./VehicleUncheckedCreateWithoutEventsInput.schema"
import { VehicleCreateOrConnectWithoutEventsInputObjectSchema } from "./VehicleCreateOrConnectWithoutEventsInput.schema"
import { VehicleUpsertWithoutEventsInputObjectSchema } from "./VehicleUpsertWithoutEventsInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleUpdateWithoutEventsInputObjectSchema } from "./VehicleUpdateWithoutEventsInput.schema"
import { VehicleUncheckedUpdateWithoutEventsInputObjectSchema } from "./VehicleUncheckedUpdateWithoutEventsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateOneWithoutEventsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutEventsInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutEventsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutEventsInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleUpsertWithoutEventsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleUpdateWithoutEventsInputObjectSchema),
        z.lazy(() => VehicleUncheckedUpdateWithoutEventsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleUpdateOneWithoutEventsNestedInputObjectSchema = Schema
