import { z } from "zod"
import { MediaFileCreateWithoutPostInputObjectSchema } from "./MediaFileCreateWithoutPostInput.schema"
import { MediaFileUncheckedCreateWithoutPostInputObjectSchema } from "./MediaFileUncheckedCreateWithoutPostInput.schema"
import { MediaFileCreateOrConnectWithoutPostInputObjectSchema } from "./MediaFileCreateOrConnectWithoutPostInput.schema"
import { MediaFileUpsertWithWhereUniqueWithoutPostInputObjectSchema } from "./MediaFileUpsertWithWhereUniqueWithoutPostInput.schema"
import { MediaFileCreateManyPostInputEnvelopeObjectSchema } from "./MediaFileCreateManyPostInputEnvelope.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithWhereUniqueWithoutPostInputObjectSchema } from "./MediaFileUpdateWithWhereUniqueWithoutPostInput.schema"
import { MediaFileUpdateManyWithWhereWithoutPostInputObjectSchema } from "./MediaFileUpdateManyWithWhereWithoutPostInput.schema"
import { MediaFileScalarWhereInputObjectSchema } from "./MediaFileScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateManyWithoutPostNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => MediaFileUpsertWithWhereUniqueWithoutPostInputObjectSchema),
        z.lazy(() => MediaFileUpsertWithWhereUniqueWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => MediaFileCreateManyPostInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => MediaFileWhereUniqueInputObjectSchema), z.lazy(() => MediaFileWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => MediaFileWhereUniqueInputObjectSchema), z.lazy(() => MediaFileWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => MediaFileWhereUniqueInputObjectSchema), z.lazy(() => MediaFileWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => MediaFileWhereUniqueInputObjectSchema), z.lazy(() => MediaFileWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => MediaFileUpdateWithWhereUniqueWithoutPostInputObjectSchema),
        z.lazy(() => MediaFileUpdateWithWhereUniqueWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MediaFileUpdateManyWithWhereWithoutPostInputObjectSchema),
        z.lazy(() => MediaFileUpdateManyWithWhereWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => MediaFileScalarWhereInputObjectSchema), z.lazy(() => MediaFileScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const MediaFileUpdateManyWithoutPostNestedInputObjectSchema = Schema
