import { z } from "zod"
import { VehiclePostCreateNestedOneWithoutPhotosInputObjectSchema } from "./VehiclePostCreateNestedOneWithoutPhotosInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoCreateWithoutOwnershipInput> = z
  .object({
    id: z.string().optional(),
    url: z.string(),
    thumbnailUrl: z.string(),
    post: z.lazy(() => VehiclePostCreateNestedOneWithoutPhotosInputObjectSchema).optional(),
  })
  .strict()

export const PhotoCreateWithoutOwnershipInputObjectSchema = Schema
