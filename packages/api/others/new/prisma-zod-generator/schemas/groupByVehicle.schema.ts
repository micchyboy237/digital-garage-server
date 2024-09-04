import { z } from "zod"
import { VehicleWhereInputObjectSchema } from "./objects/VehicleWhereInput.schema"
import { VehicleOrderByWithAggregationInputObjectSchema } from "./objects/VehicleOrderByWithAggregationInput.schema"
import { VehicleScalarWhereWithAggregatesInputObjectSchema } from "./objects/VehicleScalarWhereWithAggregatesInput.schema"
import { VehicleScalarFieldEnumSchema } from "./enums/VehicleScalarFieldEnum.schema"

export const VehicleGroupBySchema = z.object({
  where: VehicleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([VehicleOrderByWithAggregationInputObjectSchema, VehicleOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: VehicleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VehicleScalarFieldEnumSchema),
})
