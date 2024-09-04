import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferUpdateWithoutSenderInputObjectSchema } from "./VehicleTransferUpdateWithoutSenderInput.schema"
import { VehicleTransferUncheckedUpdateWithoutSenderInputObjectSchema } from "./VehicleTransferUncheckedUpdateWithoutSenderInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpdateWithWhereUniqueWithoutSenderInput> = z
  .object({
    where: z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleTransferUpdateWithoutSenderInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedUpdateWithoutSenderInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferUpdateWithWhereUniqueWithoutSenderInputObjectSchema = Schema
