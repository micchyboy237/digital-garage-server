import { z } from "zod"
import { VehicleTransferCreateWithoutSenderInputObjectSchema } from "./VehicleTransferCreateWithoutSenderInput.schema"
import { VehicleTransferUncheckedCreateWithoutSenderInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutSenderInput.schema"
import { VehicleTransferCreateOrConnectWithoutSenderInputObjectSchema } from "./VehicleTransferCreateOrConnectWithoutSenderInput.schema"
import { VehicleTransferUpsertWithWhereUniqueWithoutSenderInputObjectSchema } from "./VehicleTransferUpsertWithWhereUniqueWithoutSenderInput.schema"
import { VehicleTransferCreateManySenderInputEnvelopeObjectSchema } from "./VehicleTransferCreateManySenderInputEnvelope.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferUpdateWithWhereUniqueWithoutSenderInputObjectSchema } from "./VehicleTransferUpdateWithWhereUniqueWithoutSenderInput.schema"
import { VehicleTransferUpdateManyWithWhereWithoutSenderInputObjectSchema } from "./VehicleTransferUpdateManyWithWhereWithoutSenderInput.schema"
import { VehicleTransferScalarWhereInputObjectSchema } from "./VehicleTransferScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUncheckedUpdateManyWithoutSenderNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleTransferCreateWithoutSenderInputObjectSchema),
        z.lazy(() => VehicleTransferCreateWithoutSenderInputObjectSchema).array(),
        z.lazy(() => VehicleTransferUncheckedCreateWithoutSenderInputObjectSchema),
        z.lazy(() => VehicleTransferUncheckedCreateWithoutSenderInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleTransferCreateOrConnectWithoutSenderInputObjectSchema),
        z.lazy(() => VehicleTransferCreateOrConnectWithoutSenderInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehicleTransferUpsertWithWhereUniqueWithoutSenderInputObjectSchema),
        z.lazy(() => VehicleTransferUpsertWithWhereUniqueWithoutSenderInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleTransferCreateManySenderInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => VehicleTransferUpdateWithWhereUniqueWithoutSenderInputObjectSchema),
        z.lazy(() => VehicleTransferUpdateWithWhereUniqueWithoutSenderInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleTransferUpdateManyWithWhereWithoutSenderInputObjectSchema),
        z.lazy(() => VehicleTransferUpdateManyWithWhereWithoutSenderInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VehicleTransferScalarWhereInputObjectSchema),
        z.lazy(() => VehicleTransferScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleTransferUncheckedUpdateManyWithoutSenderNestedInputObjectSchema = Schema
