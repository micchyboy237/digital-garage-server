import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostCreateWithoutCreatedByInputObjectSchema } from "./VehiclePostCreateWithoutCreatedByInput.schema"
import { VehiclePostUncheckedCreateWithoutCreatedByInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateOrConnectWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehiclePostCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostCreateOrConnectWithoutCreatedByInputObjectSchema = Schema
