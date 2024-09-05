import { z } from "zod"
import { MediaFileUpdateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUpdateWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedUpdateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpsertWithoutVehicleDisplayPhotoOwnershipInput> = z
  .object({
    update: z.union([
      z.lazy(() => MediaFileUpdateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpsertWithoutVehicleDisplayPhotoOwnershipInputObjectSchema = Schema
