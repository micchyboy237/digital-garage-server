import { z } from "zod"
import { VehiclePostOrderByWithRelationInputObjectSchema } from "./objects/VehiclePostOrderByWithRelationInput.schema"
import { VehiclePostWhereInputObjectSchema } from "./objects/VehiclePostWhereInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./objects/VehiclePostWhereUniqueInput.schema"
import { VehiclePostCountAggregateInputObjectSchema } from "./objects/VehiclePostCountAggregateInput.schema"
import { VehiclePostMinAggregateInputObjectSchema } from "./objects/VehiclePostMinAggregateInput.schema"
import { VehiclePostMaxAggregateInputObjectSchema } from "./objects/VehiclePostMaxAggregateInput.schema"

export const VehiclePostAggregateSchema = z.object({
  orderBy: z
    .union([VehiclePostOrderByWithRelationInputObjectSchema, VehiclePostOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehiclePostWhereInputObjectSchema.optional(),
  cursor: VehiclePostWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), VehiclePostCountAggregateInputObjectSchema]).optional(),
  _min: VehiclePostMinAggregateInputObjectSchema.optional(),
  _max: VehiclePostMaxAggregateInputObjectSchema.optional(),
})
