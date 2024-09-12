import { z } from "zod"
import { VehicleCreateWithoutTransfersInputObjectSchema } from "./VehicleCreateWithoutTransfersInput.schema"
import { VehicleUncheckedCreateWithoutTransfersInputObjectSchema } from "./VehicleUncheckedCreateWithoutTransfersInput.schema"
import { VehicleCreateOrConnectWithoutTransfersInputObjectSchema } from "./VehicleCreateOrConnectWithoutTransfersInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateNestedOneWithoutTransfersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutTransfersInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutTransfersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutTransfersInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateNestedOneWithoutTransfersInputObjectSchema = Schema
