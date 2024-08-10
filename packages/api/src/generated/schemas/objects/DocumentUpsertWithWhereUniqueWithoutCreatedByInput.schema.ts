import { z } from "zod"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentUpdateWithoutCreatedByInputObjectSchema } from "./DocumentUpdateWithoutCreatedByInput.schema"
import { DocumentUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./DocumentUncheckedUpdateWithoutCreatedByInput.schema"
import { DocumentCreateWithoutCreatedByInputObjectSchema } from "./DocumentCreateWithoutCreatedByInput.schema"
import { DocumentUncheckedCreateWithoutCreatedByInputObjectSchema } from "./DocumentUncheckedCreateWithoutCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => DocumentUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => DocumentUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DocumentCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => DocumentUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
