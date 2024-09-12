import { z } from "zod"
import { MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileCreateOrConnectWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateOrConnectWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileUpsertWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUpsertWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUpdateWithoutVehicleDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedUpdateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutVehicleDisplayPhotoOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateOneWithoutVehicleDisplayPhotoOwnershipNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutVehicleDisplayPhotoOwnershipInputObjectSchema).optional(),
    upsert: z.lazy(() => MediaFileUpsertWithoutVehicleDisplayPhotoOwnershipInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MediaFileUpdateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedUpdateWithoutVehicleDisplayPhotoOwnershipInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const MediaFileUpdateOneWithoutVehicleDisplayPhotoOwnershipNestedInputObjectSchema = Schema
