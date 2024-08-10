import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateWithoutEventsInputObjectSchema } from "./VehicleOwnershipCreateWithoutEventsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutEventsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutEventsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateOrConnectWithoutEventsInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutEventsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipCreateOrConnectWithoutEventsInputObjectSchema = Schema
