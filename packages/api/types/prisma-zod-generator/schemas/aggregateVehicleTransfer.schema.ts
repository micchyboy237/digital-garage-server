import { z } from "zod"
import { VehicleTransferOrderByWithRelationInputObjectSchema } from "./objects/VehicleTransferOrderByWithRelationInput.schema"
import { VehicleTransferWhereInputObjectSchema } from "./objects/VehicleTransferWhereInput.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./objects/VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferCountAggregateInputObjectSchema } from "./objects/VehicleTransferCountAggregateInput.schema"
import { VehicleTransferMinAggregateInputObjectSchema } from "./objects/VehicleTransferMinAggregateInput.schema"
import { VehicleTransferMaxAggregateInputObjectSchema } from "./objects/VehicleTransferMaxAggregateInput.schema"

export const VehicleTransferAggregateSchema = z.object({
  orderBy: z
    .union([VehicleTransferOrderByWithRelationInputObjectSchema, VehicleTransferOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleTransferWhereInputObjectSchema.optional(),
  cursor: VehicleTransferWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), VehicleTransferCountAggregateInputObjectSchema]).optional(),
  _min: VehicleTransferMinAggregateInputObjectSchema.optional(),
  _max: VehicleTransferMaxAggregateInputObjectSchema.optional(),
})
