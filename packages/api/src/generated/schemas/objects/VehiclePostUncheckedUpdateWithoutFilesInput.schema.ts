import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { EnumPostCategoryFieldUpdateOperationsInputObjectSchema } from "./EnumPostCategoryFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { NullableEnumPostTypeFieldUpdateOperationsInputObjectSchema } from "./NullableEnumPostTypeFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUncheckedUpdateWithoutFilesInput> = z
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
    createdById: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    ownershipId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  })
  .strict()

export const VehiclePostUncheckedUpdateWithoutFilesInputObjectSchema = Schema
