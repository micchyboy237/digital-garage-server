import { z } from "zod"
import { VehicleTransferScalarWhereInputObjectSchema } from "./VehicleTransferScalarWhereInput.schema"
import { VehicleTransferUpdateManyMutationInputObjectSchema } from "./VehicleTransferUpdateManyMutationInput.schema"
import { VehicleTransferUncheckedUpdateManyWithoutTransfersSentInputObjectSchema } from "./VehicleTransferUncheckedUpdateManyWithoutTransfersSentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpdateManyWithWhereWithoutSenderInput> = z
  .object({
    where: z.lazy(() => VehicleTransferScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleTransferUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedUpdateManyWithoutTransfersSentInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferUpdateManyWithWhereWithoutSenderInputObjectSchema = Schema
