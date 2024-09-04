import { z } from "zod"
import { VehicleDetailsCreateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsCreateWithoutOwnershipInput.schema"
import { VehicleDetailsUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehicleDetailsUncheckedCreateWithoutOwnershipInput.schema"
import { VehicleDetailsCreateOrConnectWithoutOwnershipInputObjectSchema } from "./VehicleDetailsCreateOrConnectWithoutOwnershipInput.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./VehicleDetailsWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsUncheckedCreateNestedOneWithoutOwnershipInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleDetailsCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => VehicleDetailsUncheckedCreateWithoutOwnershipInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleDetailsCreateOrConnectWithoutOwnershipInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleDetailsWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDetailsUncheckedCreateNestedOneWithoutOwnershipInputObjectSchema = Schema
