import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferUpdateWithoutRecipientInputObjectSchema } from "./VehicleTransferUpdateWithoutRecipientInput.schema"
import { VehicleTransferUncheckedUpdateWithoutRecipientInputObjectSchema } from "./VehicleTransferUncheckedUpdateWithoutRecipientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpdateWithWhereUniqueWithoutRecipientInput> = z
  .object({
    where: z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleTransferUpdateWithoutRecipientInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedUpdateWithoutRecipientInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferUpdateWithWhereUniqueWithoutRecipientInputObjectSchema = Schema
