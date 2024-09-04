import { z } from "zod"
import { VehiclePostCreateWithoutOwnershipInputObjectSchema } from "./VehiclePostCreateWithoutOwnershipInput.schema"
import { VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutOwnershipInput.schema"
import { VehiclePostCreateOrConnectWithoutOwnershipInputObjectSchema } from "./VehiclePostCreateOrConnectWithoutOwnershipInput.schema"
import { VehiclePostUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema } from "./VehiclePostUpsertWithWhereUniqueWithoutOwnershipInput.schema"
import { VehiclePostCreateManyOwnershipInputEnvelopeObjectSchema } from "./VehiclePostCreateManyOwnershipInputEnvelope.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema } from "./VehiclePostUpdateWithWhereUniqueWithoutOwnershipInput.schema"
import { VehiclePostUpdateManyWithWhereWithoutOwnershipInputObjectSchema } from "./VehiclePostUpdateManyWithWhereWithoutOwnershipInput.schema"
import { VehiclePostScalarWhereInputObjectSchema } from "./VehiclePostScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpdateManyWithoutOwnershipNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehiclePostCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehiclePostCreateWithoutOwnershipInputObjectSchema).array(),
        z.lazy(() => VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehiclePostCreateOrConnectWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehiclePostCreateOrConnectWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehiclePostUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehiclePostUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehiclePostCreateManyOwnershipInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => VehiclePostUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehiclePostUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehiclePostUpdateManyWithWhereWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehiclePostUpdateManyWithWhereWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VehiclePostScalarWhereInputObjectSchema),
        z.lazy(() => VehiclePostScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehiclePostUpdateManyWithoutOwnershipNestedInputObjectSchema = Schema
