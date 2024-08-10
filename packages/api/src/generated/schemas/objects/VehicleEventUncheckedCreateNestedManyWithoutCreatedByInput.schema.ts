import { z } from "zod"
import { VehicleEventCreateWithoutCreatedByInputObjectSchema } from "./VehicleEventCreateWithoutCreatedByInput.schema"
import { VehicleEventUncheckedCreateWithoutCreatedByInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutCreatedByInput.schema"
import { VehicleEventCreateOrConnectWithoutCreatedByInputObjectSchema } from "./VehicleEventCreateOrConnectWithoutCreatedByInput.schema"
import { VehicleEventCreateManyCreatedByInputEnvelopeObjectSchema } from "./VehicleEventCreateManyCreatedByInputEnvelope.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUncheckedCreateNestedManyWithoutCreatedByInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleEventCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehicleEventCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => VehicleEventUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehicleEventUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleEventCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehicleEventCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleEventCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema = Schema
