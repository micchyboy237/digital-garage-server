import { z } from "zod"
import { MediaFileScalarWhereInputObjectSchema } from "./MediaFileScalarWhereInput.schema"
import { MediaFileUpdateManyMutationInputObjectSchema } from "./MediaFileUpdateManyMutationInput.schema"
import { MediaFileUncheckedUpdateManyWithoutFilesInputObjectSchema } from "./MediaFileUncheckedUpdateManyWithoutFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateManyWithWhereWithoutDocumentInput> = z
  .object({
    where: z.lazy(() => MediaFileScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MediaFileUpdateManyMutationInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateManyWithoutFilesInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpdateManyWithWhereWithoutDocumentInputObjectSchema = Schema
