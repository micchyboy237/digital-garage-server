import { z } from "zod"
import { MediaFileCreateWithoutOwnershipInputObjectSchema } from "./MediaFileCreateWithoutOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutOwnershipInput.schema"
import { MediaFileCreateOrConnectWithoutOwnershipInputObjectSchema } from "./MediaFileCreateOrConnectWithoutOwnershipInput.schema"
import { MediaFileUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema } from "./MediaFileUpsertWithWhereUniqueWithoutOwnershipInput.schema"
import { MediaFileCreateManyOwnershipInputEnvelopeObjectSchema } from "./MediaFileCreateManyOwnershipInputEnvelope.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema } from "./MediaFileUpdateWithWhereUniqueWithoutOwnershipInput.schema"
import { MediaFileUpdateManyWithWhereWithoutOwnershipInputObjectSchema } from "./MediaFileUpdateManyWithWhereWithoutOwnershipInput.schema"
import { MediaFileScalarWhereInputObjectSchema } from "./MediaFileScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUncheckedUpdateManyWithoutOwnershipNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => MediaFileCreateWithoutOwnershipInputObjectSchema).array(),
        z.lazy(() => MediaFileUncheckedCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MediaFileCreateOrConnectWithoutOwnershipInputObjectSchema),
        z.lazy(() => MediaFileCreateOrConnectWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => MediaFileUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUpsertWithWhereUniqueWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => MediaFileCreateManyOwnershipInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => MediaFileUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUpdateWithWhereUniqueWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MediaFileUpdateManyWithWhereWithoutOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUpdateManyWithWhereWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => MediaFileScalarWhereInputObjectSchema), z.lazy(() => MediaFileScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const MediaFileUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema = Schema
