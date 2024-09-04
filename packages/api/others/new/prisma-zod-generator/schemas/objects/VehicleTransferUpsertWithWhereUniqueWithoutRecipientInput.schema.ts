import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferUpdateWithoutRecipientInputObjectSchema } from "./VehicleTransferUpdateWithoutRecipientInput.schema"
import { VehicleTransferUncheckedUpdateWithoutRecipientInputObjectSchema } from "./VehicleTransferUncheckedUpdateWithoutRecipientInput.schema"
import { VehicleTransferCreateWithoutRecipientInputObjectSchema } from "./VehicleTransferCreateWithoutRecipientInput.schema"
import { VehicleTransferUncheckedCreateWithoutRecipientInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutRecipientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpsertWithWhereUniqueWithoutRecipientInput> = z
  .object({
    where: z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleTransferUpdateWithoutRecipientInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedUpdateWithoutRecipientInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleTransferCreateWithoutRecipientInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedCreateWithoutRecipientInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferUpsertWithWhereUniqueWithoutRecipientInputObjectSchema = Schema
