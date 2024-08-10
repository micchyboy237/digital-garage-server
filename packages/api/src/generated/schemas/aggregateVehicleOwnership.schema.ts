import { z } from "zod"
import { VehicleOwnershipOrderByWithRelationInputObjectSchema } from "./objects/VehicleOwnershipOrderByWithRelationInput.schema"
import { VehicleOwnershipWhereInputObjectSchema } from "./objects/VehicleOwnershipWhereInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./objects/VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCountAggregateInputObjectSchema } from "./objects/VehicleOwnershipCountAggregateInput.schema"
import { VehicleOwnershipMinAggregateInputObjectSchema } from "./objects/VehicleOwnershipMinAggregateInput.schema"
import { VehicleOwnershipMaxAggregateInputObjectSchema } from "./objects/VehicleOwnershipMaxAggregateInput.schema"

export const VehicleOwnershipAggregateSchema = z.object({
  orderBy: z
    .union([VehicleOwnershipOrderByWithRelationInputObjectSchema, VehicleOwnershipOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleOwnershipWhereInputObjectSchema.optional(),
  cursor: VehicleOwnershipWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), VehicleOwnershipCountAggregateInputObjectSchema]).optional(),
  _min: VehicleOwnershipMinAggregateInputObjectSchema.optional(),
  _max: VehicleOwnershipMaxAggregateInputObjectSchema.optional(),
})
