import { z } from "zod"
import { VehicleOwnershipUpdateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipUpdateWithoutDisplayPictureInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutDisplayPictureInput.schema"
import { VehicleOwnershipCreateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipCreateWithoutDisplayPictureInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutDisplayPictureInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpsertWithoutDisplayPictureInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutDisplayPictureInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutDisplayPictureInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutDisplayPictureInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutDisplayPictureInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpsertWithoutDisplayPictureInputObjectSchema = Schema
