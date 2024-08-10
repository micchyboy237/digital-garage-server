import { z } from "zod"
import { DocumentWhereUniqueInputObjectSchema } from "./DocumentWhereUniqueInput.schema"
import { DocumentCreateWithoutCreatedByInputObjectSchema } from "./DocumentCreateWithoutCreatedByInput.schema"
import { DocumentUncheckedCreateWithoutCreatedByInputObjectSchema } from "./DocumentUncheckedCreateWithoutCreatedByInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DocumentCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => DocumentUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentCreateOrConnectWithoutCreatedByInputObjectSchema = Schema
