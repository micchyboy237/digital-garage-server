import { z } from "zod"
import { VehiclePostCreateWithoutCreatedByInputObjectSchema } from "./VehiclePostCreateWithoutCreatedByInput.schema"
import { VehiclePostUncheckedCreateWithoutCreatedByInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutCreatedByInput.schema"
import { VehiclePostCreateOrConnectWithoutCreatedByInputObjectSchema } from "./VehiclePostCreateOrConnectWithoutCreatedByInput.schema"
import { VehiclePostCreateManyCreatedByInputEnvelopeObjectSchema } from "./VehiclePostCreateManyCreatedByInputEnvelope.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateNestedManyWithoutCreatedByInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehiclePostCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehiclePostCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => VehiclePostUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehiclePostCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehiclePostCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehiclePostCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehiclePostCreateNestedManyWithoutCreatedByInputObjectSchema = Schema
