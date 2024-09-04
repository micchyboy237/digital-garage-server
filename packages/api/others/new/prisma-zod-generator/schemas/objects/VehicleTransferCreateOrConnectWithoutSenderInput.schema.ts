import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferCreateWithoutSenderInputObjectSchema } from "./VehicleTransferCreateWithoutSenderInput.schema"
import { VehicleTransferUncheckedCreateWithoutSenderInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutSenderInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateOrConnectWithoutSenderInput> = z
  .object({
    where: z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleTransferCreateWithoutSenderInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedCreateWithoutSenderInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferCreateOrConnectWithoutSenderInputObjectSchema = Schema
