import { z } from "zod"
import { DocumentUpdateWithoutFilesInputObjectSchema } from "./DocumentUpdateWithoutFilesInput.schema"
import { DocumentUncheckedUpdateWithoutFilesInputObjectSchema } from "./DocumentUncheckedUpdateWithoutFilesInput.schema"
import { DocumentCreateWithoutFilesInputObjectSchema } from "./DocumentCreateWithoutFilesInput.schema"
import { DocumentUncheckedCreateWithoutFilesInputObjectSchema } from "./DocumentUncheckedCreateWithoutFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUpsertWithoutFilesInput> = z
  .object({
    update: z.union([
      z.lazy(() => DocumentUpdateWithoutFilesInputObjectSchema),
      z.lazy(() => DocumentUncheckedUpdateWithoutFilesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DocumentCreateWithoutFilesInputObjectSchema),
      z.lazy(() => DocumentUncheckedCreateWithoutFilesInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentUpsertWithoutFilesInputObjectSchema = Schema
