import { z } from "zod"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipUpdateWithoutVehicleInputObjectSchema } from "./OwnershipUpdateWithoutVehicleInput.schema"
import { OwnershipUncheckedUpdateWithoutVehicleInputObjectSchema } from "./OwnershipUncheckedUpdateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpdateWithWhereUniqueWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => OwnershipWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => OwnershipUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => OwnershipUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipUpdateWithWhereUniqueWithoutVehicleInputObjectSchema = Schema
