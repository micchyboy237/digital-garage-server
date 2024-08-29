import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostUpdateWithoutCreatedByInputObjectSchema } from "./VehiclePostUpdateWithoutCreatedByInput.schema"
import { VehiclePostUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./VehiclePostUncheckedUpdateWithoutCreatedByInput.schema"
import { VehiclePostCreateWithoutCreatedByInputObjectSchema } from "./VehiclePostCreateWithoutCreatedByInput.schema"
import { VehiclePostUncheckedCreateWithoutCreatedByInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpsertWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehiclePostUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehiclePostCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
