import { z } from "zod"
import { MediaFileWhereInputObjectSchema } from "./MediaFileWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileRelationFilter> = z
  .object({
    is: z
      .lazy(() => MediaFileWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MediaFileWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const MediaFileRelationFilterObjectSchema = Schema
