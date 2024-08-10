import { z } from "zod"
import { DocumentCreateWithoutCreatedByInputObjectSchema } from "./DocumentCreateWithoutCreatedByInput.schema"
import { DocumentUncheckedCreateWithoutCreatedByInputObjectSchema } from "./DocumentUncheckedCreateWithoutCreatedByInput.schema"
import { DocumentCreateOrConnectWithoutCreatedByInputObjectSchema } from "./DocumentCreateOrConnectWithoutCreatedByInput.schema"
import { DocumentCreateManyCreatedByInputEnvelopeObjectSchema } from "./DocumentCreateManyCreatedByInputEnvelope.schema"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUncheckedCreateNestedManyWithoutCreatedByInput> = z
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
    createMany: z.lazy(() => DocumentCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const DocumentUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema = Schema
