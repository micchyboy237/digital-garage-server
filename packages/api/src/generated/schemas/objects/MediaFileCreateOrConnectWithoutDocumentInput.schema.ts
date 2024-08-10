import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileCreateWithoutDocumentInputObjectSchema } from "./MediaFileCreateWithoutDocumentInput.schema"
import { MediaFileUncheckedCreateWithoutDocumentInputObjectSchema } from "./MediaFileUncheckedCreateWithoutDocumentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateOrConnectWithoutDocumentInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutDocumentInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutDocumentInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileCreateOrConnectWithoutDocumentInputObjectSchema = Schema
