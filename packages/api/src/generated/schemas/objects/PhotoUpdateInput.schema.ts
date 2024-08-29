import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { VehiclePostUpdateOneWithoutPhotosNestedInputObjectSchema } from "./VehiclePostUpdateOneWithoutPhotosNestedInput.schema"
import { OwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInputObjectSchema } from "./OwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    thumbnailUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    post: z.lazy(() => VehiclePostUpdateOneWithoutPhotosNestedInputObjectSchema).optional(),
    ownership: z.lazy(() => OwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInputObjectSchema).optional(),
  })
  .strict()

export const PhotoUpdateInputObjectSchema = Schema
