import { z } from "zod"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipUpdateWithoutVehicleInputObjectSchema } from "./OwnershipUpdateWithoutVehicleInput.schema"
import { OwnershipUncheckedUpdateWithoutVehicleInputObjectSchema } from "./OwnershipUncheckedUpdateWithoutVehicleInput.schema"
import { OwnershipCreateWithoutVehicleInputObjectSchema } from "./OwnershipCreateWithoutVehicleInput.schema"
import { OwnershipUncheckedCreateWithoutVehicleInputObjectSchema } from "./OwnershipUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpsertWithWhereUniqueWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => OwnershipWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => OwnershipUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => OwnershipUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OwnershipCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => OwnershipUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipUpsertWithWhereUniqueWithoutVehicleInputObjectSchema = Schema
