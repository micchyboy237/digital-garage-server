import { z } from "zod"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"
import { PhotoUpdateWithoutPostInputObjectSchema } from "./PhotoUpdateWithoutPostInput.schema"
import { PhotoUncheckedUpdateWithoutPostInputObjectSchema } from "./PhotoUncheckedUpdateWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUpdateWithWhereUniqueWithoutPostInput> = z
  .object({
    where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PhotoUpdateWithoutPostInputObjectSchema),
      z.lazy(() => PhotoUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoUpdateWithWhereUniqueWithoutPostInputObjectSchema = Schema
