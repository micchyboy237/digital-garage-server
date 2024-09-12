import { z } from "zod"
import { VehicleUpdateWithoutOwnershipsInputObjectSchema } from "./VehicleUpdateWithoutOwnershipsInput.schema"
import { VehicleUncheckedUpdateWithoutOwnershipsInputObjectSchema } from "./VehicleUncheckedUpdateWithoutOwnershipsInput.schema"
import { VehicleCreateWithoutOwnershipsInputObjectSchema } from "./VehicleCreateWithoutOwnershipsInput.schema"
import { VehicleUncheckedCreateWithoutOwnershipsInputObjectSchema } from "./VehicleUncheckedCreateWithoutOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpsertWithoutOwnershipsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleUpdateWithoutOwnershipsInputObjectSchema),
      z.lazy(() => VehicleUncheckedUpdateWithoutOwnershipsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleCreateWithoutOwnershipsInputObjectSchema),
      z.lazy(() => VehicleUncheckedCreateWithoutOwnershipsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleUpsertWithoutOwnershipsInputObjectSchema = Schema
