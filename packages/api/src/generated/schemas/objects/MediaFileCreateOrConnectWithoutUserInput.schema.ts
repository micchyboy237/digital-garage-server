import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileCreateWithoutUserInputObjectSchema } from "./MediaFileCreateWithoutUserInput.schema"
import { MediaFileUncheckedCreateWithoutUserInputObjectSchema } from "./MediaFileUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutUserInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileCreateOrConnectWithoutUserInputObjectSchema = Schema
