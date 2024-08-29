import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleCreateWithoutTransfersInputObjectSchema } from "./VehicleCreateWithoutTransfersInput.schema"
import { VehicleUncheckedCreateWithoutTransfersInputObjectSchema } from "./VehicleUncheckedCreateWithoutTransfersInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutTransfersInput> = z
  .object({
    where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutTransfersInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutTransfersInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleCreateOrConnectWithoutTransfersInputObjectSchema = Schema
