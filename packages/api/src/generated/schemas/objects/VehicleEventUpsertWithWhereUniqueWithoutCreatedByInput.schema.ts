import { z } from "zod"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventUpdateWithoutCreatedByInputObjectSchema } from "./VehicleEventUpdateWithoutCreatedByInput.schema"
import { VehicleEventUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./VehicleEventUncheckedUpdateWithoutCreatedByInput.schema"
import { VehicleEventCreateWithoutCreatedByInputObjectSchema } from "./VehicleEventCreateWithoutCreatedByInput.schema"
import { VehicleEventUncheckedCreateWithoutCreatedByInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpsertWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleEventUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleEventCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
