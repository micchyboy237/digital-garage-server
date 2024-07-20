import { z } from "zod"
import { DocumentCreateWithoutFilesInputObjectSchema } from "./DocumentCreateWithoutFilesInput.schema"
import { DocumentUncheckedCreateWithoutFilesInputObjectSchema } from "./DocumentUncheckedCreateWithoutFilesInput.schema"
import { DocumentCreateOrConnectWithoutFilesInputObjectSchema } from "./DocumentCreateOrConnectWithoutFilesInput.schema"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutFilesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DocumentCreateWithoutFilesInputObjectSchema),
        z.lazy(() => DocumentUncheckedCreateWithoutFilesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutFilesInputObjectSchema).optional(),
    connect: z.lazy(() => DocumentWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const DocumentCreateNestedOneWithoutFilesInputObjectSchema = Schema
