import { z } from "zod"
import { MediaFileCreateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileCreateWithoutUserDisplayPictureInput.schema"
import { MediaFileUncheckedCreateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileUncheckedCreateWithoutUserDisplayPictureInput.schema"
import { MediaFileCreateOrConnectWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileCreateOrConnectWithoutUserDisplayPictureInput.schema"
import { MediaFileUpsertWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileUpsertWithoutUserDisplayPictureInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileUpdateWithoutUserDisplayPictureInput.schema"
import { MediaFileUncheckedUpdateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutUserDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateOneWithoutUserDisplayPictureNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutUserDisplayPictureInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutUserDisplayPictureInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutUserDisplayPictureInputObjectSchema).optional(),
    upsert: z.lazy(() => MediaFileUpsertWithoutUserDisplayPictureInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MediaFileUpdateWithoutUserDisplayPictureInputObjectSchema),
        z.lazy(() => MediaFileUncheckedUpdateWithoutUserDisplayPictureInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const MediaFileUpdateOneWithoutUserDisplayPictureNestedInputObjectSchema = Schema
