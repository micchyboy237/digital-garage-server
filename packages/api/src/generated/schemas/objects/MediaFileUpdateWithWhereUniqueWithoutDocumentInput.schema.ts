import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileUpdateWithoutDocumentInputObjectSchema } from "./MediaFileUpdateWithoutDocumentInput.schema"
import { MediaFileUncheckedUpdateWithoutDocumentInputObjectSchema } from "./MediaFileUncheckedUpdateWithoutDocumentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateWithWhereUniqueWithoutDocumentInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MediaFileUpdateWithoutDocumentInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateWithoutDocumentInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpdateWithWhereUniqueWithoutDocumentInputObjectSchema = Schema
