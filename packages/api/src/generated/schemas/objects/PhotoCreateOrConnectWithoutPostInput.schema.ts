import { z } from "zod"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"
import { PhotoCreateWithoutPostInputObjectSchema } from "./PhotoCreateWithoutPostInput.schema"
import { PhotoUncheckedCreateWithoutPostInputObjectSchema } from "./PhotoUncheckedCreateWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoCreateOrConnectWithoutPostInput> = z
  .object({
    where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutPostInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoCreateOrConnectWithoutPostInputObjectSchema = Schema
