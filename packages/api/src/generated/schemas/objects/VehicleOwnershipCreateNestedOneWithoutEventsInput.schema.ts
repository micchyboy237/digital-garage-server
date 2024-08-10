import { z } from "zod"
import { VehicleOwnershipCreateWithoutEventsInputObjectSchema } from "./VehicleOwnershipCreateWithoutEventsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutEventsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutEventsInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutEventsInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutEventsInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateNestedOneWithoutEventsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutEventsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutEventsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutEventsInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCreateNestedOneWithoutEventsInputObjectSchema = Schema
