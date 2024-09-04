import { z } from "zod"
import { VehicleDetailsOrderByWithRelationInputObjectSchema } from "./objects/VehicleDetailsOrderByWithRelationInput.schema"
import { VehicleDetailsWhereInputObjectSchema } from "./objects/VehicleDetailsWhereInput.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./objects/VehicleDetailsWhereUniqueInput.schema"
import { VehicleDetailsCountAggregateInputObjectSchema } from "./objects/VehicleDetailsCountAggregateInput.schema"
import { VehicleDetailsMinAggregateInputObjectSchema } from "./objects/VehicleDetailsMinAggregateInput.schema"
import { VehicleDetailsMaxAggregateInputObjectSchema } from "./objects/VehicleDetailsMaxAggregateInput.schema"
import { VehicleDetailsAvgAggregateInputObjectSchema } from "./objects/VehicleDetailsAvgAggregateInput.schema"
import { VehicleDetailsSumAggregateInputObjectSchema } from "./objects/VehicleDetailsSumAggregateInput.schema"

export const VehicleDetailsAggregateSchema = z.object({
  orderBy: z
    .union([VehicleDetailsOrderByWithRelationInputObjectSchema, VehicleDetailsOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleDetailsWhereInputObjectSchema.optional(),
  cursor: VehicleDetailsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), VehicleDetailsCountAggregateInputObjectSchema]).optional(),
  _min: VehicleDetailsMinAggregateInputObjectSchema.optional(),
  _max: VehicleDetailsMaxAggregateInputObjectSchema.optional(),
  _avg: VehicleDetailsAvgAggregateInputObjectSchema.optional(),
  _sum: VehicleDetailsSumAggregateInputObjectSchema.optional(),
})
