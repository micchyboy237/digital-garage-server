import { z } from "zod"
import { VehicleCreateWithoutOwnershipsInputObjectSchema } from "./VehicleCreateWithoutOwnershipsInput.schema"
import { VehicleUncheckedCreateWithoutOwnershipsInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnershipsInput.schema"
import { VehicleCreateOrConnectWithoutOwnershipsInputObjectSchema } from "./VehicleCreateOrConnectWithoutOwnershipsInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateNestedOneWithoutOwnershipsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutOwnershipsInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutOwnershipsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutOwnershipsInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateNestedOneWithoutOwnershipsInputObjectSchema = Schema
