import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { EnumPostCategoryFieldUpdateOperationsInputObjectSchema } from "./EnumPostCategoryFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { NullableEnumPostTypeFieldUpdateOperationsInputObjectSchema } from "./NullableEnumPostTypeFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { MediaFileUpdateManyWithoutPostNestedInputObjectSchema } from "./MediaFileUpdateManyWithoutPostNestedInput.schema"
import { UserUpdateOneWithoutPostsNestedInputObjectSchema } from "./UserUpdateOneWithoutPostsNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpdateWithoutOwnershipInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    files: z.lazy(() => MediaFileUpdateManyWithoutPostNestedInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserUpdateOneWithoutPostsNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostUpdateWithoutOwnershipInputObjectSchema = Schema
