import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleCreateWithoutEventsInputObjectSchema } from "./VehicleCreateWithoutEventsInput.schema"
import { VehicleUncheckedCreateWithoutEventsInputObjectSchema } from "./VehicleUncheckedCreateWithoutEventsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutEventsInput> = z
  .object({
    where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutEventsInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleCreateOrConnectWithoutEventsInputObjectSchema = Schema
