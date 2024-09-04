import { z } from "zod"
import { VehicleTransferCreateWithoutRecipientInputObjectSchema } from "./VehicleTransferCreateWithoutRecipientInput.schema"
import { VehicleTransferUncheckedCreateWithoutRecipientInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutRecipientInput.schema"
import { VehicleTransferCreateOrConnectWithoutRecipientInputObjectSchema } from "./VehicleTransferCreateOrConnectWithoutRecipientInput.schema"
import { VehicleTransferCreateManyRecipientInputEnvelopeObjectSchema } from "./VehicleTransferCreateManyRecipientInputEnvelope.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUncheckedCreateNestedManyWithoutRecipientInput> = z
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
    createMany: z.lazy(() => VehicleTransferCreateManyRecipientInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleTransferUncheckedCreateNestedManyWithoutRecipientInputObjectSchema = Schema
