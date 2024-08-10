import { z } from "zod"
import { MediaFileCreateWithoutUserInputObjectSchema } from "./MediaFileCreateWithoutUserInput.schema"
import { MediaFileUncheckedCreateWithoutUserInputObjectSchema } from "./MediaFileUncheckedCreateWithoutUserInput.schema"
import { MediaFileCreateOrConnectWithoutUserInputObjectSchema } from "./MediaFileCreateOrConnectWithoutUserInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutUserInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutUserInputObjectSchema).optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileCreateNestedOneWithoutUserInputObjectSchema = Schema
