import { z } from "zod"
import { VehicleTransferCreateWithoutRecipientInputObjectSchema } from "./VehicleTransferCreateWithoutRecipientInput.schema"
import { VehicleTransferUncheckedCreateWithoutRecipientInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutRecipientInput.schema"
import { VehicleTransferCreateOrConnectWithoutRecipientInputObjectSchema } from "./VehicleTransferCreateOrConnectWithoutRecipientInput.schema"
import { VehicleTransferUpsertWithWhereUniqueWithoutRecipientInputObjectSchema } from "./VehicleTransferUpsertWithWhereUniqueWithoutRecipientInput.schema"
import { VehicleTransferCreateManyRecipientInputEnvelopeObjectSchema } from "./VehicleTransferCreateManyRecipientInputEnvelope.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferUpdateWithWhereUniqueWithoutRecipientInputObjectSchema } from "./VehicleTransferUpdateWithWhereUniqueWithoutRecipientInput.schema"
import { VehicleTransferUpdateManyWithWhereWithoutRecipientInputObjectSchema } from "./VehicleTransferUpdateManyWithWhereWithoutRecipientInput.schema"
import { VehicleTransferScalarWhereInputObjectSchema } from "./VehicleTransferScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUncheckedUpdateManyWithoutRecipientNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleTransferCreateWithoutRecipientInputObjectSchema),
        z.lazy(() => VehicleTransferCreateWithoutRecipientInputObjectSchema).array(),
        z.lazy(() => VehicleTransferUncheckedCreateWithoutRecipientInputObjectSchema),
        z.lazy(() => VehicleTransferUncheckedCreateWithoutRecipientInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleTransferCreateOrConnectWithoutRecipientInputObjectSchema),
        z.lazy(() => VehicleTransferCreateOrConnectWithoutRecipientInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehicleTransferUpsertWithWhereUniqueWithoutRecipientInputObjectSchema),
        z.lazy(() => VehicleTransferUpsertWithWhereUniqueWithoutRecipientInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleTransferCreateManyRecipientInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => VehicleTransferUpdateWithWhereUniqueWithoutRecipientInputObjectSchema),
        z.lazy(() => VehicleTransferUpdateWithWhereUniqueWithoutRecipientInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleTransferUpdateManyWithWhereWithoutRecipientInputObjectSchema),
        z.lazy(() => VehicleTransferUpdateManyWithWhereWithoutRecipientInputObjectSchema).array(),
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

export const VehicleTransferUncheckedUpdateManyWithoutRecipientNestedInputObjectSchema = Schema
