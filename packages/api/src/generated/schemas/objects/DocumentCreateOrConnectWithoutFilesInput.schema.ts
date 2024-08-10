import { z } from "zod"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentCreateWithoutFilesInputObjectSchema } from "./DocumentCreateWithoutFilesInput.schema"
import { DocumentUncheckedCreateWithoutFilesInputObjectSchema } from "./DocumentUncheckedCreateWithoutFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutFilesInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DocumentCreateWithoutFilesInputObjectSchema),
      z.lazy(() => DocumentUncheckedCreateWithoutFilesInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentCreateOrConnectWithoutFilesInputObjectSchema = Schema
