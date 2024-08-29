import { z } from "zod"
import { OwnershipCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipCreateNestedOneWithoutVehicleDisplayPhotoInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoCreateWithoutPostInput> = z
  .object({
    id: z.string().optional(),
    url: z.string(),
    thumbnailUrl: z.string(),
    ownership: z.lazy(() => OwnershipCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema).optional(),
  })
  .strict()

export const PhotoCreateWithoutPostInputObjectSchema = Schema
