import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleCreateWithoutDetailsInputObjectSchema } from "./VehicleCreateWithoutDetailsInput.schema"
import { VehicleUncheckedCreateWithoutDetailsInputObjectSchema } from "./VehicleUncheckedCreateWithoutDetailsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutDetailsInput> = z
  .object({
    where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutDetailsInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutDetailsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleCreateOrConnectWithoutDetailsInputObjectSchema = Schema
