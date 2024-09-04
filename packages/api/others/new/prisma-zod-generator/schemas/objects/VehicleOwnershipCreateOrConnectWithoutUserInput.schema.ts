import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateWithoutUserInputObjectSchema } from "./VehicleOwnershipCreateWithoutUserInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutUserInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipCreateOrConnectWithoutUserInputObjectSchema = Schema
