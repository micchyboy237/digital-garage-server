import { z } from "zod"
import { DocumentCreateWithoutCreatedByInputObjectSchema } from "./DocumentCreateWithoutCreatedByInput.schema"
import { DocumentUncheckedCreateWithoutCreatedByInputObjectSchema } from "./DocumentUncheckedCreateWithoutCreatedByInput.schema"
import { DocumentCreateOrConnectWithoutCreatedByInputObjectSchema } from "./DocumentCreateOrConnectWithoutCreatedByInput.schema"
import { DocumentUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./DocumentUpsertWithWhereUniqueWithoutCreatedByInput.schema"
import { DocumentCreateManyCreatedByInputEnvelopeObjectSchema } from "./DocumentCreateManyCreatedByInputEnvelope.schema"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./DocumentUpdateWithWhereUniqueWithoutCreatedByInput.schema"
import { DocumentUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from "./DocumentUpdateManyWithWhereWithoutCreatedByInput.schema"
import { DocumentScalarWhereInputObjectSchema } from "./DocumentScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUncheckedUpdateManyWithoutCreatedByNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DocumentCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => DocumentCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => DocumentUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => DocumentUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DocumentCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => DocumentCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => DocumentUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => DocumentUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => DocumentCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => DocumentUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => DocumentUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DocumentUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
        z.lazy(() => DocumentUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => DocumentScalarWhereInputObjectSchema), z.lazy(() => DocumentScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const DocumentUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema
