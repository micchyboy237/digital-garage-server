import { z } from "zod"
import { VehicleTransferCreateWithoutSenderInputObjectSchema } from "./VehicleTransferCreateWithoutSenderInput.schema"
import { VehicleTransferUncheckedCreateWithoutSenderInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutSenderInput.schema"
import { VehicleTransferCreateOrConnectWithoutSenderInputObjectSchema } from "./VehicleTransferCreateOrConnectWithoutSenderInput.schema"
import { VehicleTransferCreateManySenderInputEnvelopeObjectSchema } from "./VehicleTransferCreateManySenderInputEnvelope.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateNestedManyWithoutSenderInput> = z
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
    createMany: z.lazy(() => VehicleTransferCreateManySenderInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleTransferCreateNestedManyWithoutSenderInputObjectSchema = Schema
