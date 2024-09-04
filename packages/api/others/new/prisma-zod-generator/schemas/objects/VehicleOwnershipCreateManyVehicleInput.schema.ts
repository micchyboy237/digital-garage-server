import { z } from "zod"
import { VehicleOwnershipCreateexcludedPhotosInputObjectSchema } from "./VehicleOwnershipCreateexcludedPhotosInput.schema"
import { VehicleOwnershipCreateexcludedVideosInputObjectSchema } from "./VehicleOwnershipCreateexcludedVideosInput.schema"
import { VehicleOwnershipCreateexcludedDocsInputObjectSchema } from "./VehicleOwnershipCreateexcludedDocsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateManyVehicleInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    isCurrentOwner: z.boolean().optional(),
    vehicleDisplayPhotoId: z.string().optional().nullable(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional().nullable(),
    excludedPhotos: z.union([z.lazy(() => VehicleOwnershipCreateexcludedPhotosInputObjectSchema), z.string().array()]).optional(),
    excludedVideos: z.union([z.lazy(() => VehicleOwnershipCreateexcludedVideosInputObjectSchema), z.string().array()]).optional(),
    excludedDocs: z.union([z.lazy(() => VehicleOwnershipCreateexcludedDocsInputObjectSchema), z.string().array()]).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VehicleOwnershipCreateManyVehicleInputObjectSchema = Schema
