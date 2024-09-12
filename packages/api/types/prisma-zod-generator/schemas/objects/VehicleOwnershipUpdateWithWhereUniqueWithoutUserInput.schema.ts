import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutUserInputObjectSchema } from "./VehicleOwnershipUpdateWithoutUserInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutUserInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutUserInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
