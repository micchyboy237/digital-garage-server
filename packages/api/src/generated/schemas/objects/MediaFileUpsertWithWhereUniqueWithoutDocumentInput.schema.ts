import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutDocumentInputObjectSchema } from "./MediaFileUpdateWithoutDocumentInput.schema"
import { MediaFileUncheckedUpdateWithoutDocumentInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutDocumentInput.schema"
import { MediaFileCreateWithoutDocumentInputObjectSchema } from "./MediaFileCreateWithoutDocumentInput.schema"
import { MediaFileUncheckedCreateWithoutDocumentInputObjectSchema } from "./MediaFileUncheckedCreateWithoutDocumentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpsertWithWhereUniqueWithoutDocumentInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MediaFileUpdateWithoutDocumentInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutDocumentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutDocumentInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutDocumentInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpsertWithWhereUniqueWithoutDocumentInputObjectSchema = Schema
