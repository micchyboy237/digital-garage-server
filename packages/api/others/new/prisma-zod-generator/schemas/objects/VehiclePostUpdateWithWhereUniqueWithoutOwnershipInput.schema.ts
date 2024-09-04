import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostUpdateWithoutOwnershipInputObjectSchema } from "./VehiclePostUpdateWithoutOwnershipInput.schema"
import { VehiclePostUncheckedUpdateWithoutOwnershipInputObjectSchema } from "./VehiclePostUncheckedUpdateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpdateWithWhereUniqueWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehiclePostUpdateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedUpdateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema = Schema
