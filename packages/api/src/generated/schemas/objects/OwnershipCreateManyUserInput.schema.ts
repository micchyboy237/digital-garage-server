import { z } from "zod"
import { OwnershipCreateexcludedPostsInputObjectSchema } from "./OwnershipCreateexcludedPostsInput.schema"
import { OwnershipCreateexcludedPhotosInputObjectSchema } from "./OwnershipCreateexcludedPhotosInput.schema"
import { OwnershipCreateexcludedDocsInputObjectSchema } from "./OwnershipCreateexcludedDocsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    vehicleId: z.string(),
    isCurrentOwner: z.boolean().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional().nullable(),
    excludedPosts: z.union([z.lazy(() => OwnershipCreateexcludedPostsInputObjectSchema), z.string().array()]).optional(),
    excludedPhotos: z.union([z.lazy(() => OwnershipCreateexcludedPhotosInputObjectSchema), z.string().array()]).optional(),
    excludedDocs: z.union([z.lazy(() => OwnershipCreateexcludedDocsInputObjectSchema), z.string().array()]).optional(),
  })
  .strict()

export const OwnershipCreateManyUserInputObjectSchema = Schema
