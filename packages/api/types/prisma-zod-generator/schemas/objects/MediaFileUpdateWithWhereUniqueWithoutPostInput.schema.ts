import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutPostInputObjectSchema } from "./MediaFileUpdateWithoutPostInput.schema"
import { MediaFileUncheckedUpdateWithoutPostInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateWithWhereUniqueWithoutPostInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MediaFileUpdateWithoutPostInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpdateWithWhereUniqueWithoutPostInputObjectSchema = Schema
