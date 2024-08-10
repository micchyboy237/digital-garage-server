import { z } from "zod"
import { MediaFileCreateWithoutUserInputObjectSchema } from "./MediaFileCreateWithoutUserInput.schema"
import { MediaFileUncheckedCreateWithoutUserInputObjectSchema } from "./MediaFileUncheckedCreateWithoutUserInput.schema"
import { MediaFileCreateOrConnectWithoutUserInputObjectSchema } from "./MediaFileCreateOrConnectWithoutUserInput.schema"
import { MediaFileUpsertWithoutUserInputObjectSchema } from "./MediaFileUpsertWithoutUserInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutUserInputObjectSchema } from "./MediaFileUpdateWithoutUserInput.schema"
import { MediaFileUncheckedUpdateWithoutUserInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateOneWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutUserInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => MediaFileCreateOrConnectWithoutUserInputObjectSchema).optional(),
    upsert: z.lazy(() => MediaFileUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => MediaFileWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MediaFileUpdateWithoutUserInputObjectSchema),
        z.lazy(() => MediaFileUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const MediaFileUpdateOneWithoutUserNestedInputObjectSchema = Schema
