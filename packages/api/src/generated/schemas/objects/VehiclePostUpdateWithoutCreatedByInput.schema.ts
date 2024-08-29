import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { EnumPostCategoryFieldUpdateOperationsInputObjectSchema } from "./EnumPostCategoryFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { NullableEnumPostTypeFieldUpdateOperationsInputObjectSchema } from "./NullableEnumPostTypeFieldUpdateOperationsInput.schema"
import { PhotoUpdateManyWithoutPostNestedInputObjectSchema } from "./PhotoUpdateManyWithoutPostNestedInput.schema"
import { VehicleDocumentUpdateManyWithoutPostNestedInputObjectSchema } from "./VehicleDocumentUpdateManyWithoutPostNestedInput.schema"
import { OwnershipUpdateOneWithoutPostsNestedInputObjectSchema } from "./OwnershipUpdateOneWithoutPostsNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpdateWithoutCreatedByInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    category: z
      .union([z.lazy(() => PostCategorySchema), z.lazy(() => EnumPostCategoryFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    type: z
      .union([z.lazy(() => PostTypeSchema), z.lazy(() => NullableEnumPostTypeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    photos: z.lazy(() => PhotoUpdateManyWithoutPostNestedInputObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentUpdateManyWithoutPostNestedInputObjectSchema).optional(),
    ownership: z.lazy(() => OwnershipUpdateOneWithoutPostsNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostUpdateWithoutCreatedByInputObjectSchema = Schema
