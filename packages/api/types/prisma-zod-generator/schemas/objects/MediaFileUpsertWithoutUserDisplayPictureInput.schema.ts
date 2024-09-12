import { z } from "zod"
import { MediaFileUpdateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileUpdateWithoutUserDisplayPictureInput.schema"
import { MediaFileUncheckedUpdateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutUserDisplayPictureInput.schema"
import { MediaFileCreateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileCreateWithoutUserDisplayPictureInput.schema"
import { MediaFileUncheckedCreateWithoutUserDisplayPictureInputObjectSchema } from "./MediaFileUncheckedCreateWithoutUserDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpsertWithoutUserDisplayPictureInput> = z
  .object({
    update: z.union([
      z.lazy(() => MediaFileUpdateWithoutUserDisplayPictureInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutUserDisplayPictureInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutUserDisplayPictureInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutUserDisplayPictureInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpsertWithoutUserDisplayPictureInputObjectSchema = Schema
