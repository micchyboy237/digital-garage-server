import { z } from "zod"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentUpdateWithoutCreatedByInputObjectSchema } from "./DocumentUpdateWithoutCreatedByInput.schema"
import { DocumentUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./DocumentUncheckedUpdateWithoutCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => DocumentUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => DocumentUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema
