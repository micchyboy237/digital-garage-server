import { z } from "zod"
import { VehicleOwnershipWhereInputObjectSchema } from "./objects/VehicleOwnershipWhereInput.schema"
import { VehicleOwnershipOrderByWithAggregationInputObjectSchema } from "./objects/VehicleOwnershipOrderByWithAggregationInput.schema"
import { VehicleOwnershipScalarWhereWithAggregatesInputObjectSchema } from "./objects/VehicleOwnershipScalarWhereWithAggregatesInput.schema"
import { VehicleOwnershipScalarFieldEnumSchema } from "./enums/VehicleOwnershipScalarFieldEnum.schema"

export const VehicleOwnershipGroupBySchema = z.object({
  where: VehicleOwnershipWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VehicleOwnershipOrderByWithAggregationInputObjectSchema,
      VehicleOwnershipOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VehicleOwnershipScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VehicleOwnershipScalarFieldEnumSchema),
})
