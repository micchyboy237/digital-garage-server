import { z } from "zod"
import { MediaFileCreateWithoutPostInputObjectSchema } from "./MediaFileCreateWithoutPostInput.schema"
import { MediaFileUncheckedCreateWithoutPostInputObjectSchema } from "./MediaFileUncheckedCreateWithoutPostInput.schema"
import { MediaFileCreateOrConnectWithoutPostInputObjectSchema } from "./MediaFileCreateOrConnectWithoutPostInput.schema"
import { MediaFileCreateManyPostInputEnvelopeObjectSchema } from "./MediaFileCreateManyPostInputEnvelope.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateNestedManyWithoutPostInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutPostInputObjectSchema),
        z.lazy(() => MediaFileCreateWithoutPostInputObjectSchema).array(),
        z.lazy(() => MediaFileUncheckedCreateWithoutPostInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MediaFileCreateOrConnectWithoutPostInputObjectSchema),
        z.lazy(() => MediaFileCreateOrConnectWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => MediaFileCreateManyPostInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => MediaFileWhereUniqueInputObjectSchema), z.lazy(() => MediaFileWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const MediaFileCreateNestedManyWithoutPostInputObjectSchema = Schema
