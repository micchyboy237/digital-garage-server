import { z } from "zod"
import { MediaFileUpdateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileUpdateWithoutVehicleOwnershipInput.schema"
import { MediaFileUncheckedUpdateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutVehicleOwnershipInput.schema"
import { MediaFileCreateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileCreateWithoutVehicleOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpsertWithoutVehicleOwnershipInput> = z
  .object({
    update: z.union([
      z.lazy(() => MediaFileUpdateWithoutVehicleOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutVehicleOwnershipInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutVehicleOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutVehicleOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpsertWithoutVehicleOwnershipInputObjectSchema = Schema
