import { z } from "zod"
import { VehicleTransferScalarWhereInputObjectSchema } from "./VehicleTransferScalarWhereInput.schema"
import { VehicleTransferUpdateManyMutationInputObjectSchema } from "./VehicleTransferUpdateManyMutationInput.schema"
import { VehicleTransferUncheckedUpdateManyWithoutTransfersInputObjectSchema } from "./VehicleTransferUncheckedUpdateManyWithoutTransfersInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpdateManyWithWhereWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleTransferScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleTransferUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedUpdateManyWithoutTransfersInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferUpdateManyWithWhereWithoutVehicleInputObjectSchema = Schema
