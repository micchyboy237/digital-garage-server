import { z } from "zod"
import { VehiclePostCreateNestedOneWithoutPhotosInputObjectSchema } from "./VehiclePostCreateNestedOneWithoutPhotosInput.schema"
import { OwnershipCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema } from "./OwnershipCreateNestedOneWithoutVehicleDisplayPhotoInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoCreateInput> = z
  .object({
    id: z.string().optional(),
    url: z.string(),
    thumbnailUrl: z.string(),
    post: z.lazy(() => VehiclePostCreateNestedOneWithoutPhotosInputObjectSchema).optional(),
    ownership: z.lazy(() => OwnershipCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema).optional(),
  })
  .strict()

export const PhotoCreateInputObjectSchema = Schema
