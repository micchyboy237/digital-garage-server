import { z } from "zod"
import { VehicleWhereUniqueInputObjectSchema } from "./VehicleWhereUniqueInput.schema"
import { VehicleUpdateWithoutOwnerInputObjectSchema } from "./VehicleUpdateWithoutOwnerInput.schema"
import { VehicleUncheckedUpdateWithoutOwnerInputObjectSchema } from "./VehicleUncheckedUpdateWithoutOwnerInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => VehicleUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleUpdateWithWhereUniqueWithoutOwnerInputObjectSchema = Schema
