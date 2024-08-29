import { z } from "zod"
import { VehiclePostUpdateWithoutPhotosInputObjectSchema } from "./VehiclePostUpdateWithoutPhotosInput.schema"
import { VehiclePostUncheckedUpdateWithoutPhotosInputObjectSchema } from "./VehiclePostUncheckedUpdateWithoutPhotosInput.schema"
import { VehiclePostCreateWithoutPhotosInputObjectSchema } from "./VehiclePostCreateWithoutPhotosInput.schema"
import { VehiclePostUncheckedCreateWithoutPhotosInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutPhotosInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpsertWithoutPhotosInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehiclePostUpdateWithoutPhotosInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedUpdateWithoutPhotosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehiclePostCreateWithoutPhotosInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedCreateWithoutPhotosInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostUpsertWithoutPhotosInputObjectSchema = Schema
