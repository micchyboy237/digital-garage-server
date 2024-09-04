import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutUserInputObjectSchema } from "./VehicleOwnershipUpdateWithoutUserInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutUserInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutUserInput.schema"
import { VehicleOwnershipCreateWithoutUserInputObjectSchema } from "./VehicleOwnershipCreateWithoutUserInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutUserInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutUserInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
