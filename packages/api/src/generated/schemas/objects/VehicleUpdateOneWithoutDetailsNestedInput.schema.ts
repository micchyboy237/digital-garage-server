import { z } from "zod"
import { VehicleCreateWithoutDetailsInputObjectSchema } from "./VehicleCreateWithoutDetailsInput.schema"
import { VehicleUncheckedCreateWithoutDetailsInputObjectSchema } from "./VehicleUncheckedCreateWithoutDetailsInput.schema"
import { VehicleCreateOrConnectWithoutDetailsInputObjectSchema } from "./VehicleCreateOrConnectWithoutDetailsInput.schema"
import { VehicleUpsertWithoutDetailsInputObjectSchema } from "./VehicleUpsertWithoutDetailsInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleUpdateWithoutDetailsInputObjectSchema } from "./VehicleUpdateWithoutDetailsInput.schema"
import { VehicleUncheckedUpdateWithoutDetailsInputObjectSchema } from "./VehicleUncheckedUpdateWithoutDetailsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateOneWithoutDetailsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutDetailsInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutDetailsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleUpsertWithoutDetailsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleUpdateWithoutDetailsInputObjectSchema),
        z.lazy(() => VehicleUncheckedUpdateWithoutDetailsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleUpdateOneWithoutDetailsNestedInputObjectSchema = Schema
