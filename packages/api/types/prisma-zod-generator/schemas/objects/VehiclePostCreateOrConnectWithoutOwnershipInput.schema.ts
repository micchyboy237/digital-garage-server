import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostCreateWithoutOwnershipInputObjectSchema } from "./VehiclePostCreateWithoutOwnershipInput.schema"
import { VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateOrConnectWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehiclePostCreateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostCreateOrConnectWithoutOwnershipInputObjectSchema = Schema
