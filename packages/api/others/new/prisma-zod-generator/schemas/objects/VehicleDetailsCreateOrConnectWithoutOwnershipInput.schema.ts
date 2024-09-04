import { z } from "zod"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./VehicleDetailsWhereUniqueInput.schema"
import { VehicleDetailsCreateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsCreateWithoutOwnershipInput.schema"
import { VehicleDetailsUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsUncheckedCreateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsCreateOrConnectWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => VehicleDetailsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleDetailsCreateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehicleDetailsUncheckedCreateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDetailsCreateOrConnectWithoutOwnershipInputObjectSchema = Schema
