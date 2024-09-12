import { z } from "zod"
import { VehicleTransferScalarWhereInputObjectSchema } from "./VehicleTransferScalarWhereInput.schema"
import { VehicleTransferUpdateManyMutationInputObjectSchema } from "./VehicleTransferUpdateManyMutationInput.schema"
import { VehicleTransferUncheckedUpdateManyWithoutTransfersReceivedInputObjectSchema } from "./VehicleTransferUncheckedUpdateManyWithoutTransfersReceivedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpdateManyWithWhereWithoutRecipientInput> = z
  .object({
    where: z.lazy(() => VehicleTransferScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleTransferUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedUpdateManyWithoutTransfersReceivedInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferUpdateManyWithWhereWithoutRecipientInputObjectSchema = Schema
