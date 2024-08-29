import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleUpdateWithoutOwnerInputObjectSchema } from "./VehicleUpdateWithoutOwnerInput.schema"
import { VehicleUncheckedUpdateWithoutOwnerInputObjectSchema } from "./VehicleUncheckedUpdateWithoutOwnerInput.schema"
import { VehicleCreateWithoutOwnerInputObjectSchema } from "./VehicleCreateWithoutOwnerInput.schema"
import { VehicleUncheckedCreateWithoutOwnerInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnerInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpsertWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => VehicleUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleUpsertWithWhereUniqueWithoutOwnerInputObjectSchema = Schema
