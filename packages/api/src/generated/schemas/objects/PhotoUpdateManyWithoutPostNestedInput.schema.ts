import { z } from "zod"
import { PhotoCreateWithoutPostInputObjectSchema } from "./PhotoCreateWithoutPostInput.schema"
import { PhotoUncheckedCreateWithoutPostInputObjectSchema } from "./PhotoUncheckedCreateWithoutPostInput.schema"
import { PhotoCreateOrConnectWithoutPostInputObjectSchema } from "./PhotoCreateOrConnectWithoutPostInput.schema"
import { PhotoUpsertWithWhereUniqueWithoutPostInputObjectSchema } from "./PhotoUpsertWithWhereUniqueWithoutPostInput.schema"
import { PhotoCreateManyPostInputEnvelopeObjectSchema } from "./PhotoCreateManyPostInputEnvelope.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"
import { PhotoUpdateWithWhereUniqueWithoutPostInputObjectSchema } from "./PhotoUpdateWithWhereUniqueWithoutPostInput.schema"
import { PhotoUpdateManyWithWhereWithoutPostInputObjectSchema } from "./PhotoUpdateManyWithWhereWithoutPostInput.schema"
import { PhotoScalarWhereInputObjectSchema } from "./PhotoScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUpdateManyWithoutPostNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PhotoCreateWithoutPostInputObjectSchema),
        z.lazy(() => PhotoCreateWithoutPostInputObjectSchema).array(),
        z.lazy(() => PhotoUncheckedCreateWithoutPostInputObjectSchema),
        z.lazy(() => PhotoUncheckedCreateWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PhotoCreateOrConnectWithoutPostInputObjectSchema),
        z.lazy(() => PhotoCreateOrConnectWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => PhotoUpsertWithWhereUniqueWithoutPostInputObjectSchema),
        z.lazy(() => PhotoUpsertWithWhereUniqueWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => PhotoCreateManyPostInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => PhotoWhereUniqueInputObjectSchema), z.lazy(() => PhotoWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => PhotoWhereUniqueInputObjectSchema), z.lazy(() => PhotoWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => PhotoWhereUniqueInputObjectSchema), z.lazy(() => PhotoWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => PhotoWhereUniqueInputObjectSchema), z.lazy(() => PhotoWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => PhotoUpdateWithWhereUniqueWithoutPostInputObjectSchema),
        z.lazy(() => PhotoUpdateWithWhereUniqueWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PhotoUpdateManyWithWhereWithoutPostInputObjectSchema),
        z.lazy(() => PhotoUpdateManyWithWhereWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => PhotoScalarWhereInputObjectSchema), z.lazy(() => PhotoScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const PhotoUpdateManyWithoutPostNestedInputObjectSchema = Schema
