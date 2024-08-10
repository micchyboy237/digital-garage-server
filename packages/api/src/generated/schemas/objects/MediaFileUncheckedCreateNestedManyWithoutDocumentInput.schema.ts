import { z } from "zod"
import { MediaFileCreateWithoutDocumentInputObjectSchema } from "./MediaFileCreateWithoutDocumentInput.schema"
import { MediaFileUncheckedCreateWithoutDocumentInputObjectSchema } from "./MediaFileUncheckedCreateWithoutDocumentInput.schema"
import { MediaFileCreateOrConnectWithoutDocumentInputObjectSchema } from "./MediaFileCreateOrConnectWithoutDocumentInput.schema"
import { MediaFileCreateManyDocumentInputEnvelopeObjectSchema } from "./MediaFileCreateManyDocumentInputEnvelope.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUncheckedCreateNestedManyWithoutDocumentInput> = z
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
    createMany: z.lazy(() => MediaFileCreateManyDocumentInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => MediaFileWhereUniqueInputObjectSchema), z.lazy(() => MediaFileWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const MediaFileUncheckedCreateNestedManyWithoutDocumentInputObjectSchema = Schema
