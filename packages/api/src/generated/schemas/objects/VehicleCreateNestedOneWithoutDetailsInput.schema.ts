import { z } from "zod"
import { VehicleCreateWithoutDetailsInputObjectSchema } from "./VehicleCreateWithoutDetailsInput.schema"
import { VehicleUncheckedCreateWithoutDetailsInputObjectSchema } from "./VehicleUncheckedCreateWithoutDetailsInput.schema"
import { VehicleCreateOrConnectWithoutDetailsInputObjectSchema } from "./VehicleCreateOrConnectWithoutDetailsInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateNestedOneWithoutDetailsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleCreateWithoutDetailsInputObjectSchema),
        z.lazy(() => VehicleUncheckedCreateWithoutDetailsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateNestedOneWithoutDetailsInputObjectSchema = Schema
