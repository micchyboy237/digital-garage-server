import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { OwnershipUpdateexcludedPostsInputObjectSchema } from "./OwnershipUpdateexcludedPostsInput.schema"
import { OwnershipUpdateexcludedPhotosInputObjectSchema } from "./OwnershipUpdateexcludedPhotosInput.schema"
import { OwnershipUpdateexcludedDocsInputObjectSchema } from "./OwnershipUpdateexcludedDocsInput.schema"
import { PhotoUncheckedUpdateOneWithoutOwnershipNestedInputObjectSchema } from "./PhotoUncheckedUpdateOneWithoutOwnershipNestedInput.schema"
import { VehiclePostUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./VehiclePostUncheckedUpdateManyWithoutOwnershipNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUncheckedUpdateWithoutDocumentsInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    vehicleId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    isCurrentOwner: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    startDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    endDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    excludedPosts: z.union([z.lazy(() => OwnershipUpdateexcludedPostsInputObjectSchema), z.string().array()]).optional(),
    excludedPhotos: z.union([z.lazy(() => OwnershipUpdateexcludedPhotosInputObjectSchema), z.string().array()]).optional(),
    excludedDocs: z.union([z.lazy(() => OwnershipUpdateexcludedDocsInputObjectSchema), z.string().array()]).optional(),
    vehicleDisplayPhoto: z.lazy(() => PhotoUncheckedUpdateOneWithoutOwnershipNestedInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipUncheckedUpdateWithoutDocumentsInputObjectSchema = Schema
