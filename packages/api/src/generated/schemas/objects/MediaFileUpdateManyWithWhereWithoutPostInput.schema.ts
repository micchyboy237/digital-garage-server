import { z } from "zod"
import { MediaFileScalarWhereInputObjectSchema } from "./MediaFileScalarWhereInput.schema"
import { MediaFileUpdateManyMutationInputObjectSchema } from "./MediaFileUpdateManyMutationInput.schema"
import { MediaFileUncheckedUpdateManyWithoutPhotosInputObjectSchema } from "./MediaFileUncheckedUpdateManyWithoutPhotosInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateManyWithWhereWithoutPostInput> = z
  .object({
    where: z.lazy(() => MediaFileScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MediaFileUpdateManyMutationInputObjectSchema),
      z.lazy(() => MediaFileUncheckedUpdateManyWithoutPhotosInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileUpdateManyWithWhereWithoutPostInputObjectSchema = Schema
