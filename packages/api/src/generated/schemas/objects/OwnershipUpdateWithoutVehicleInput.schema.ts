import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { OwnershipUpdateexcludedPostsInputObjectSchema } from "./OwnershipUpdateexcludedPostsInput.schema"
import { OwnershipUpdateexcludedPhotosInputObjectSchema } from "./OwnershipUpdateexcludedPhotosInput.schema"
import { OwnershipUpdateexcludedDocsInputObjectSchema } from "./OwnershipUpdateexcludedDocsInput.schema"
import { PhotoUpdateOneWithoutOwnershipNestedInputObjectSchema } from "./PhotoUpdateOneWithoutOwnershipNestedInput.schema"
import { UserUpdateOneWithoutOwnershipsNestedInputObjectSchema } from "./UserUpdateOneWithoutOwnershipsNestedInput.schema"
import { VehiclePostUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./VehiclePostUpdateManyWithoutOwnershipNestedInput.schema"
import { VehicleDocumentUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./VehicleDocumentUpdateManyWithoutOwnershipNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpdateWithoutVehicleInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    isCurrentOwner: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    startDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    endDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    excludedPosts: z.union([z.lazy(() => OwnershipUpdateexcludedPostsInputObjectSchema), z.string().array()]).optional(),
    excludedPhotos: z.union([z.lazy(() => OwnershipUpdateexcludedPhotosInputObjectSchema), z.string().array()]).optional(),
    excludedDocs: z.union([z.lazy(() => OwnershipUpdateexcludedDocsInputObjectSchema), z.string().array()]).optional(),
    vehicleDisplayPhoto: z.lazy(() => PhotoUpdateOneWithoutOwnershipNestedInputObjectSchema).optional(),
    user: z.lazy(() => UserUpdateOneWithoutOwnershipsNestedInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipUpdateWithoutVehicleInputObjectSchema = Schema
