import { z } from "zod"
import { VehicleDocumentOrderByWithRelationInputObjectSchema } from "./objects/VehicleDocumentOrderByWithRelationInput.schema"
import { VehicleDocumentWhereInputObjectSchema } from "./objects/VehicleDocumentWhereInput.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./objects/VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentCountAggregateInputObjectSchema } from "./objects/VehicleDocumentCountAggregateInput.schema"
import { VehicleDocumentMinAggregateInputObjectSchema } from "./objects/VehicleDocumentMinAggregateInput.schema"
import { VehicleDocumentMaxAggregateInputObjectSchema } from "./objects/VehicleDocumentMaxAggregateInput.schema"

export const VehicleDocumentAggregateSchema = z.object({
  orderBy: z
    .union([VehicleDocumentOrderByWithRelationInputObjectSchema, VehicleDocumentOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleDocumentWhereInputObjectSchema.optional(),
  cursor: VehicleDocumentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), VehicleDocumentCountAggregateInputObjectSchema]).optional(),
  _min: VehicleDocumentMinAggregateInputObjectSchema.optional(),
  _max: VehicleDocumentMaxAggregateInputObjectSchema.optional(),
})
