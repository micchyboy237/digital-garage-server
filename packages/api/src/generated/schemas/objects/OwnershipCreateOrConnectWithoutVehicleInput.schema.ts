import { z } from "zod"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipCreateWithoutVehicleInputObjectSchema } from "./OwnershipCreateWithoutVehicleInput.schema"
import { OwnershipUncheckedCreateWithoutVehicleInputObjectSchema } from "./OwnershipUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateOrConnectWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => OwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OwnershipCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => OwnershipUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipCreateOrConnectWithoutVehicleInputObjectSchema = Schema
