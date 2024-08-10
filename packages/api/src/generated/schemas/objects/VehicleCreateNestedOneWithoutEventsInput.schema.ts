import { z } from "zod"
import { VehicleCreateWithoutEventsInputObjectSchema } from "./VehicleCreateWithoutEventsInput.schema"
import { VehicleUncheckedCreateWithoutEventsInputObjectSchema } from "./VehicleUncheckedCreateWithoutEventsInput.schema"
import { VehicleCreateOrConnectWithoutEventsInputObjectSchema } from "./VehicleCreateOrConnectWithoutEventsInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateNestedOneWithoutEventsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutEventsInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutEventsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutEventsInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateNestedOneWithoutEventsInputObjectSchema = Schema
