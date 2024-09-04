import { z } from "zod"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostUpdateWithoutOwnershipInputObjectSchema } from "./VehiclePostUpdateWithoutOwnershipInput.schema"
import { VehiclePostUncheckedUpdateWithoutOwnershipInputObjectSchema } from "./VehiclePostUncheckedUpdateWithoutOwnershipInput.schema"
import { VehiclePostCreateWithoutOwnershipInputObjectSchema } from "./VehiclePostCreateWithoutOwnershipInput.schema"
import { VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpsertWithWhereUniqueWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehiclePostUpdateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedUpdateWithoutOwnershipInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehiclePostCreateWithoutOwnershipInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema = Schema
