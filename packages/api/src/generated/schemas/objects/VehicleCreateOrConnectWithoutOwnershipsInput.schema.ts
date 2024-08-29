import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleCreateWithoutOwnershipsInputObjectSchema } from "./VehicleCreateWithoutOwnershipsInput.schema"
import { VehicleUncheckedCreateWithoutOwnershipsInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutOwnershipsInput> = z
  .object({
    where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutOwnershipsInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutOwnershipsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleCreateOrConnectWithoutOwnershipsInputObjectSchema = Schema
