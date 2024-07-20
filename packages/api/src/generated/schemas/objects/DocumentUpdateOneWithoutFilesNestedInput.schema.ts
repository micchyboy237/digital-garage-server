import { z } from "zod"
import { DocumentCreateWithoutFilesInputObjectSchema } from "./DocumentCreateWithoutFilesInput.schema"
import { DocumentUncheckedCreateWithoutFilesInputObjectSchema } from "./DocumentUncheckedCreateWithoutFilesInput.schema"
import { DocumentCreateOrConnectWithoutFilesInputObjectSchema } from "./DocumentCreateOrConnectWithoutFilesInput.schema"
import { DocumentUpsertWithoutFilesInputObjectSchema } from "./DocumentUpsertWithoutFilesInput.schema"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentUpdateWithoutFilesInputObjectSchema } from "./DocumentUpdateWithoutFilesInput.schema"
import { DocumentUncheckedUpdateWithoutFilesInputObjectSchema } from "./DocumentUncheckedUpdateWithoutFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUpdateOneWithoutFilesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DocumentCreateWithoutFilesInputObjectSchema),
        z.lazy(() => DocumentUncheckedCreateWithoutFilesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutFilesInputObjectSchema).optional(),
    upsert: z.lazy(() => DocumentUpsertWithoutFilesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => DocumentWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => DocumentUpdateWithoutFilesInputObjectSchema),
        z.lazy(() => DocumentUncheckedUpdateWithoutFilesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const DocumentUpdateOneWithoutFilesNestedInputObjectSchema = Schema
