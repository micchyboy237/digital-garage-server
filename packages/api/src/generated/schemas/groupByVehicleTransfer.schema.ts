import { z } from "zod"
import { VehicleTransferWhereInputObjectSchema } from "./objects/VehicleTransferWhereInput.schema"
import { VehicleTransferOrderByWithAggregationInputObjectSchema } from "./objects/VehicleTransferOrderByWithAggregationInput.schema"
import { VehicleTransferScalarWhereWithAggregatesInputObjectSchema } from "./objects/VehicleTransferScalarWhereWithAggregatesInput.schema"
import { VehicleTransferScalarFieldEnumSchema } from "./enums/VehicleTransferScalarFieldEnum.schema"

export const VehicleTransferGroupBySchema = z.object({
  where: VehicleTransferWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VehicleTransferOrderByWithAggregationInputObjectSchema,
      VehicleTransferOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VehicleTransferScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VehicleTransferScalarFieldEnumSchema),
})
