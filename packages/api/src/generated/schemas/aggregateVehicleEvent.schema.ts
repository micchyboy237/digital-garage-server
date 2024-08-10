import { z } from "zod"
import { VehicleEventOrderByWithRelationInputObjectSchema } from "./objects/VehicleEventOrderByWithRelationInput.schema"
import { VehicleEventWhereInputObjectSchema } from "./objects/VehicleEventWhereInput.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./objects/VehicleEventWhereUniqueInput.schema"
import { VehicleEventCountAggregateInputObjectSchema } from "./objects/VehicleEventCountAggregateInput.schema"
import { VehicleEventMinAggregateInputObjectSchema } from "./objects/VehicleEventMinAggregateInput.schema"
import { VehicleEventMaxAggregateInputObjectSchema } from "./objects/VehicleEventMaxAggregateInput.schema"
import { VehicleEventAvgAggregateInputObjectSchema } from "./objects/VehicleEventAvgAggregateInput.schema"
import { VehicleEventSumAggregateInputObjectSchema } from "./objects/VehicleEventSumAggregateInput.schema"

export const VehicleEventAggregateSchema = z.object({
  orderBy: z
    .union([VehicleEventOrderByWithRelationInputObjectSchema, VehicleEventOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleEventWhereInputObjectSchema.optional(),
  cursor: VehicleEventWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), VehicleEventCountAggregateInputObjectSchema]).optional(),
  _min: VehicleEventMinAggregateInputObjectSchema.optional(),
  _max: VehicleEventMaxAggregateInputObjectSchema.optional(),
  _avg: VehicleEventAvgAggregateInputObjectSchema.optional(),
  _sum: VehicleEventSumAggregateInputObjectSchema.optional(),
})
