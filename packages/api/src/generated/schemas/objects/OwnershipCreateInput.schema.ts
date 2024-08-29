import { z } from "zod"
import { OwnershipCreateexcludedPostsInputObjectSchema } from "./OwnershipCreateexcludedPostsInput.schema"
import { OwnershipCreateexcludedPhotosInputObjectSchema } from "./OwnershipCreateexcludedPhotosInput.schema"
import { OwnershipCreateexcludedDocsInputObjectSchema } from "./OwnershipCreateexcludedDocsInput.schema"
import { PhotoCreateNestedOneWithoutOwnershipInputObjectSchema } from "./PhotoCreateNestedOneWithoutOwnershipInput.schema"
import { UserCreateNestedOneWithoutOwnershipsInputObjectSchema } from "./UserCreateNestedOneWithoutOwnershipsInput.schema"
import { VehicleCreateNestedOneWithoutOwnershipsInputObjectSchema } from "./VehicleCreateNestedOneWithoutOwnershipsInput.schema"
import { VehiclePostCreateNestedManyWithoutOwnershipInputObjectSchema } from "./VehiclePostCreateNestedManyWithoutOwnershipInput.schema"
import { VehicleDocumentCreateNestedManyWithoutOwnershipInputObjectSchema } from "./VehicleDocumentCreateNestedManyWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateInput> = z
  .object({
    id: z.string().optional(),
    isCurrentOwner: z.boolean().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional().nullable(),
    excludedPosts: z.union([z.lazy(() => OwnershipCreateexcludedPostsInputObjectSchema), z.string().array()]).optional(),
    excludedPhotos: z.union([z.lazy(() => OwnershipCreateexcludedPhotosInputObjectSchema), z.string().array()]).optional(),
    excludedDocs: z.union([z.lazy(() => OwnershipCreateexcludedDocsInputObjectSchema), z.string().array()]).optional(),
    vehicleDisplayPhoto: z.lazy(() => PhotoCreateNestedOneWithoutOwnershipInputObjectSchema).optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutOwnershipsInputObjectSchema).optional(),
    vehicle: z.lazy(() => VehicleCreateNestedOneWithoutOwnershipsInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostCreateNestedManyWithoutOwnershipInputObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentCreateNestedManyWithoutOwnershipInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipCreateInputObjectSchema = Schema
