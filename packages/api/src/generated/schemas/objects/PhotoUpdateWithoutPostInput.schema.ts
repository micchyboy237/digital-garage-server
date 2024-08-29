import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { OwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInputObjectSchema } from "./OwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUpdateWithoutPostInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    thumbnailUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    ownership: z.lazy(() => OwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInputObjectSchema).optional(),
  })
  .strict()

export const PhotoUpdateWithoutPostInputObjectSchema = Schema
