import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateOrConnectWithoutVehicleDisplayPhotoOwnershipInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileCreateOrConnectWithoutVehicleDisplayPhotoOwnershipInputObjectSchema = Schema
