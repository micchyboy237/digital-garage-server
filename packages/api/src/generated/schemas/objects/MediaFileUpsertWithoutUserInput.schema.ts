import { z } from "zod"
import { MediaFileUpdateWithoutUserInputObjectSchema } from "./MediaFileUpdateWithoutUserInput.schema"
import { MediaFileUncheckedUpdateWithoutUserInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutUserInput.schema"
import { MediaFileCreateWithoutUserInputObjectSchema } from "./MediaFileCreateWithoutUserInput.schema"
import { MediaFileUncheckedCreateWithoutUserInputObjectSchema } from "./MediaFileUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => MediaFileUpdateWithoutUserInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutUserInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpsertWithoutUserInputObjectSchema = Schema
