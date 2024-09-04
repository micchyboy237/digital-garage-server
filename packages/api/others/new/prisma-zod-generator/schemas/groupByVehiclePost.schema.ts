import { z } from "zod"
import { VehiclePostWhereInputObjectSchema } from "./objects/VehiclePostWhereInput.schema"
import { VehiclePostOrderByWithAggregationInputObjectSchema } from "./objects/VehiclePostOrderByWithAggregationInput.schema"
import { VehiclePostScalarWhereWithAggregatesInputObjectSchema } from "./objects/VehiclePostScalarWhereWithAggregatesInput.schema"
import { VehiclePostScalarFieldEnumSchema } from "./enums/VehiclePostScalarFieldEnum.schema"

export const VehiclePostGroupBySchema = z.object({
  where: VehiclePostWhereInputObjectSchema.optional(),
  orderBy: z
    .union([VehiclePostOrderByWithAggregationInputObjectSchema, VehiclePostOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: VehiclePostScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VehiclePostScalarFieldEnumSchema),
})
