import { z } from "zod"
import { MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileCreateOrConnectWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateOrConnectWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateNestedOneWithoutVehicleDisplayPhotoOwnershipInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutVehicleDisplayPhotoOwnershipInputObjectSchema).optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileCreateNestedOneWithoutVehicleDisplayPhotoOwnershipInputObjectSchema = Schema
