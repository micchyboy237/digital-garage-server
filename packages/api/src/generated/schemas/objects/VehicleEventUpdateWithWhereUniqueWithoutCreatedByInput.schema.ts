import { z } from "zod"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventUpdateWithoutCreatedByInputObjectSchema } from "./VehicleEventUpdateWithoutCreatedByInput.schema"
import { VehicleEventUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./VehicleEventUncheckedUpdateWithoutCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpdateWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleEventUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
