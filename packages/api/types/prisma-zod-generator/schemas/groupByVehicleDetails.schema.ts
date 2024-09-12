import { z } from "zod"
import { VehicleDetailsWhereInputObjectSchema } from "./objects/VehicleDetailsWhereInput.schema"
import { VehicleDetailsOrderByWithAggregationInputObjectSchema } from "./objects/VehicleDetailsOrderByWithAggregationInput.schema"
import { VehicleDetailsScalarWhereWithAggregatesInputObjectSchema } from "./objects/VehicleDetailsScalarWhereWithAggregatesInput.schema"
import { VehicleDetailsScalarFieldEnumSchema } from "./enums/VehicleDetailsScalarFieldEnum.schema"

export const VehicleDetailsGroupBySchema = z.object({
  where: VehicleDetailsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([VehicleDetailsOrderByWithAggregationInputObjectSchema, VehicleDetailsOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: VehicleDetailsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VehicleDetailsScalarFieldEnumSchema),
})
