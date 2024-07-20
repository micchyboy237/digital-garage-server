import { z } from "zod"
import { MediaFileCreateWithoutDocumentInputObjectSchema } from "./MediaFileCreateWithoutDocumentInput.schema"
import { MediaFileUncheckedCreateWithoutDocumentInputObjectSchema } from "./MediaFileUncheckedCreateWithoutDocumentInput.schema"
import { MediaFileCreateOrConnectWithoutDocumentInputObjectSchema } from "./MediaFileCreateOrConnectWithoutDocumentInput.schema"
import { MediaFileUpsertWithWhereUniqueWithoutDocumentInputObjectSchema } from "./MediaFileUpsertWithWhereUniqueWithoutDocumentInput.schema"
import { MediaFileCreateManyDocumentInputEnvelopeObjectSchema } from "./MediaFileCreateManyDocumentInputEnvelope.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithWhereUniqueWithoutDocumentInputObjectSchema } from "./MediaFileUpdateWithWhereUniqueWithoutDocumentInput.schema"
import { MediaFileUpdateManyWithWhereWithoutDocumentInputObjectSchema } from "./MediaFileUpdateManyWithWhereWithoutDocumentInput.schema"
import { MediaFileScalarWhereInputObjectSchema } from "./MediaFileScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUncheckedUpdateManyWithoutDocumentNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutDocumentInputObjectSchema),
        z.lazy(() => MediaFileCreateWithoutDocumentInputObjectSchema).array(),
        z.lazy(() => MediaFileUncheckedCreateWithoutDocumentInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutDocumentInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MediaFileCreateOrConnectWithoutDocumentInputObjectSchema),
        z.lazy(() => MediaFileCreateOrConnectWithoutDocumentInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => MediaFileUpsertWithWhereUniqueWithoutDocumentInputObjectSchema),
        z.lazy(() => MediaFileUpsertWithWhereUniqueWithoutDocumentInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => MediaFileCreateManyDocumentInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => MediaFileUpdateWithWhereUniqueWithoutDocumentInputObjectSchema),
        z.lazy(() => MediaFileUpdateWithWhereUniqueWithoutDocumentInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MediaFileUpdateManyWithWhereWithoutDocumentInputObjectSchema),
        z.lazy(() => MediaFileUpdateManyWithWhereWithoutDocumentInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => MediaFileScalarWhereInputObjectSchema), z.lazy(() => MediaFileScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const MediaFileUncheckedUpdateManyWithoutDocumentNestedInputObjectSchema = Schema
