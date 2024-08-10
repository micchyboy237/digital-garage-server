import { z } from "zod"
import { VehicleEventWhereInputObjectSchema } from "./objects/VehicleEventWhereInput.schema"
import { VehicleEventOrderByWithAggregationInputObjectSchema } from "./objects/VehicleEventOrderByWithAggregationInput.schema"
import { VehicleEventScalarWhereWithAggregatesInputObjectSchema } from "./objects/VehicleEventScalarWhereWithAggregatesInput.schema"
import { VehicleEventScalarFieldEnumSchema } from "./enums/VehicleEventScalarFieldEnum.schema"

export const VehicleEventGroupBySchema = z.object({
  where: VehicleEventWhereInputObjectSchema.optional(),
  orderBy: z
    .union([VehicleEventOrderByWithAggregationInputObjectSchema, VehicleEventOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: VehicleEventScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VehicleEventScalarFieldEnumSchema),
})
