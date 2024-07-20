import { z } from "zod"
import { VehicleUpdateWithoutDetailsInputObjectSchema } from "./VehicleUpdateWithoutDetailsInput.schema"
import { VehicleUncheckedUpdateWithoutDetailsInputObjectSchema } from "./VehicleUncheckedUpdateWithoutDetailsInput.schema"
import { VehicleCreateWithoutDetailsInputObjectSchema } from "./VehicleCreateWithoutDetailsInput.schema"
import { VehicleUncheckedCreateWithoutDetailsInputObjectSchema } from "./VehicleUncheckedCreateWithoutDetailsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpsertWithoutDetailsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleUpdateWithoutDetailsInputObjectSchema),
      z.lazy(() => VehicleUncheckedUpdateWithoutDetailsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutDetailsInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutDetailsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleUpsertWithoutDetailsInputObjectSchema = Schema
