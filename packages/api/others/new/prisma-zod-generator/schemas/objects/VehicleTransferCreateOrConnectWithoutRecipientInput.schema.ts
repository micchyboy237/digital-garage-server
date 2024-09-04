import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferCreateWithoutRecipientInputObjectSchema } from "./VehicleTransferCreateWithoutRecipientInput.schema"
import { VehicleTransferUncheckedCreateWithoutRecipientInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutRecipientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateOrConnectWithoutRecipientInput> = z
  .object({
    where: z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleTransferCreateWithoutRecipientInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedCreateWithoutRecipientInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferCreateOrConnectWithoutRecipientInputObjectSchema = Schema
