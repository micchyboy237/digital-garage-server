import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferUpdateWithoutSenderInputObjectSchema } from "./VehicleTransferUpdateWithoutSenderInput.schema"
import { VehicleTransferUncheckedUpdateWithoutSenderInputObjectSchema } from "./VehicleTransferUncheckedUpdateWithoutSenderInput.schema"
import { VehicleTransferCreateWithoutSenderInputObjectSchema } from "./VehicleTransferCreateWithoutSenderInput.schema"
import { VehicleTransferUncheckedCreateWithoutSenderInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutSenderInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpsertWithWhereUniqueWithoutSenderInput> = z
  .object({
    where: z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleTransferUpdateWithoutSenderInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedUpdateWithoutSenderInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleTransferCreateWithoutSenderInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedCreateWithoutSenderInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferUpsertWithWhereUniqueWithoutSenderInputObjectSchema = Schema
