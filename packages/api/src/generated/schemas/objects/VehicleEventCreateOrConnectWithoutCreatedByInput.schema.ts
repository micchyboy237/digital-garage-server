import { z } from "zod"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventCreateWithoutCreatedByInputObjectSchema } from "./VehicleEventCreateWithoutCreatedByInput.schema"
import { VehicleEventUncheckedCreateWithoutCreatedByInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCreateOrConnectWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleEventCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventCreateOrConnectWithoutCreatedByInputObjectSchema = Schema
