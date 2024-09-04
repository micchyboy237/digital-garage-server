import { z } from "zod"
import { MediaFileCreateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileCreateOrConnectWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileCreateOrConnectWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileUpsertWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUpsertWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUpdateWithoutDisplayPhotoOwnershipInput.schema"
import { MediaFileUncheckedUpdateWithoutDisplayPhotoOwnershipInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutDisplayPhotoOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateOneWithoutDisplayPhotoOwnershipNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutDisplayPhotoOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutDisplayPhotoOwnershipInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutDisplayPhotoOwnershipInputObjectSchema).optional(),
    upsert: z.lazy(() => MediaFileUpsertWithoutDisplayPhotoOwnershipInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MediaFileUpdateWithoutDisplayPhotoOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedUpdateWithoutDisplayPhotoOwnershipInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const MediaFileUpdateOneWithoutDisplayPhotoOwnershipNestedInputObjectSchema = Schema
