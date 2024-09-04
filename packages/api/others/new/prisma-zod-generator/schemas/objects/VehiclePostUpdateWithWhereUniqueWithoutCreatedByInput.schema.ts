import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostUpdateWithoutCreatedByInputObjectSchema } from "./VehiclePostUpdateWithoutCreatedByInput.schema"
import { VehiclePostUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./VehiclePostUncheckedUpdateWithoutCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpdateWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehiclePostUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
