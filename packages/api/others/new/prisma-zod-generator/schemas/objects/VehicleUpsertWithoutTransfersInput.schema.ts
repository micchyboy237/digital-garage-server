import { z } from "zod"
import { VehicleUpdateWithoutTransfersInputObjectSchema } from "./VehicleUpdateWithoutTransfersInput.schema"
import { VehicleUncheckedUpdateWithoutTransfersInputObjectSchema } from "./VehicleUncheckedUpdateWithoutTransfersInput.schema"
import { VehicleCreateWithoutTransfersInputObjectSchema } from "./VehicleCreateWithoutTransfersInput.schema"
import { VehicleUncheckedCreateWithoutTransfersInputObjectSchema } from "./VehicleUncheckedCreateWithoutTransfersInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpsertWithoutTransfersInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleUpdateWithoutTransfersInputObjectSchema),
      z.lazy(() => VehicleUncheckedUpdateWithoutTransfersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutTransfersInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutTransfersInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleUpsertWithoutTransfersInputObjectSchema = Schema
