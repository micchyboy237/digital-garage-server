import { z } from "zod"
import { VehicleCreateWithoutTransfersInputObjectSchema } from "./VehicleCreateWithoutTransfersInput.schema"
import { VehicleUncheckedCreateWithoutTransfersInputObjectSchema } from "./VehicleUncheckedCreateWithoutTransfersInput.schema"
import { VehicleCreateOrConnectWithoutTransfersInputObjectSchema } from "./VehicleCreateOrConnectWithoutTransfersInput.schema"
import { VehicleUpsertWithoutTransfersInputObjectSchema } from "./VehicleUpsertWithoutTransfersInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleUpdateWithoutTransfersInputObjectSchema } from "./VehicleUpdateWithoutTransfersInput.schema"
import { VehicleUncheckedUpdateWithoutTransfersInputObjectSchema } from "./VehicleUncheckedUpdateWithoutTransfersInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateOneWithoutTransfersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutTransfersInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutTransfersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutTransfersInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleUpsertWithoutTransfersInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleUpdateWithoutTransfersInputObjectSchema),
        z.lazy(() => VehicleUncheckedUpdateWithoutTransfersInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleUpdateOneWithoutTransfersNestedInputObjectSchema = Schema
