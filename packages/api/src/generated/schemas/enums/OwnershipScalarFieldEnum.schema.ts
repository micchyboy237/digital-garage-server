import { z } from "zod"

export const OwnershipScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "vehicleId",
  "isCurrentOwner",
  "startDate",
  "endDate",
  "excludedPosts",
  "excludedPhotos",
  "excludedDocs",
])
