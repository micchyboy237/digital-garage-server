import { z } from "zod"
import { OwnershipCreateexcludedPostsInputObjectSchema } from "./OwnershipCreateexcludedPostsInput.schema"
import { OwnershipCreateexcludedPhotosInputObjectSchema } from "./OwnershipCreateexcludedPhotosInput.schema"
import { OwnershipCreateexcludedDocsInputObjectSchema } from "./OwnershipCreateexcludedDocsInput.schema"
import { PhotoUncheckedCreateNestedOneWithoutOwnershipInputObjectSchema } from "./PhotoUncheckedCreateNestedOneWithoutOwnershipInput.schema"
import { VehiclePostUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema } from "./VehiclePostUncheckedCreateNestedManyWithoutOwnershipInput.schema"
import { VehicleDocumentUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema } from "./VehicleDocumentUncheckedCreateNestedManyWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUncheckedCreateWithoutVehicleInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    isCurrentOwner: z.boolean().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional().nullable(),
    excludedPosts: z.union([z.lazy(() => OwnershipCreateexcludedPostsInputObjectSchema), z.string().array()]).optional(),
    excludedPhotos: z.union([z.lazy(() => OwnershipCreateexcludedPhotosInputObjectSchema), z.string().array()]).optional(),
    excludedDocs: z.union([z.lazy(() => OwnershipCreateexcludedDocsInputObjectSchema), z.string().array()]).optional(),
    vehicleDisplayPhoto: z.lazy(() => PhotoUncheckedCreateNestedOneWithoutOwnershipInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipUncheckedCreateWithoutVehicleInputObjectSchema = Schema
