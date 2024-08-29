import { z } from "zod"
import { VehicleCreateWithoutOwnershipsInputObjectSchema } from "./VehicleCreateWithoutOwnershipsInput.schema"
import { VehicleUncheckedCreateWithoutOwnershipsInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnershipsInput.schema"
import { VehicleCreateOrConnectWithoutOwnershipsInputObjectSchema } from "./VehicleCreateOrConnectWithoutOwnershipsInput.schema"
import { VehicleUpsertWithoutOwnershipsInputObjectSchema } from "./VehicleUpsertWithoutOwnershipsInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleUpdateWithoutOwnershipsInputObjectSchema } from "./VehicleUpdateWithoutOwnershipsInput.schema"
import { VehicleUncheckedUpdateWithoutOwnershipsInputObjectSchema } from "./VehicleUncheckedUpdateWithoutOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateOneWithoutOwnershipsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutOwnershipsInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutOwnershipsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutOwnershipsInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleUpsertWithoutOwnershipsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleUpdateWithoutOwnershipsInputObjectSchema),
        z.lazy(() => VehicleUncheckedUpdateWithoutOwnershipsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleUpdateOneWithoutOwnershipsNestedInputObjectSchema = Schema
