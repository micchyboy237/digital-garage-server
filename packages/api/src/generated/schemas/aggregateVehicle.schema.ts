import { z } from "zod"
import { VehicleOrderByWithRelationInputObjectSchema } from "./objects/VehicleOrderByWithRelationInput.schema"
import { VehicleWhereInputObjectSchema } from "./objects/VehicleWhereInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./objects/VehicleWhereUniqueInput.schema"
import { VehicleCountAggregateInputObjectSchema } from "./objects/VehicleCountAggregateInput.schema"
import { VehicleMinAggregateInputObjectSchema } from "./objects/VehicleMinAggregateInput.schema"
import { VehicleMaxAggregateInputObjectSchema } from "./objects/VehicleMaxAggregateInput.schema"

export const VehicleAggregateSchema = z.object({
  orderBy: z.union([VehicleOrderByWithRelationInputObjectSchema, VehicleOrderByWithRelationInputObjectSchema.array()]).optional(),
  where: VehicleWhereInputObjectSchema.optional(),
  cursor: VehicleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), VehicleCountAggregateInputObjectSchema]).optional(),
  _min: VehicleMinAggregateInputObjectSchema.optional(),
  _max: VehicleMaxAggregateInputObjectSchema.optional(),
})
