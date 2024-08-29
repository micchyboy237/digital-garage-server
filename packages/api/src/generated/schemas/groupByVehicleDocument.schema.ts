import { z } from "zod"
import { VehicleDocumentWhereInputObjectSchema } from "./objects/VehicleDocumentWhereInput.schema"
import { VehicleDocumentOrderByWithAggregationInputObjectSchema } from "./objects/VehicleDocumentOrderByWithAggregationInput.schema"
import { VehicleDocumentScalarWhereWithAggregatesInputObjectSchema } from "./objects/VehicleDocumentScalarWhereWithAggregatesInput.schema"
import { VehicleDocumentScalarFieldEnumSchema } from "./enums/VehicleDocumentScalarFieldEnum.schema"

export const VehicleDocumentGroupBySchema = z.object({
  where: VehicleDocumentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VehicleDocumentOrderByWithAggregationInputObjectSchema,
      VehicleDocumentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VehicleDocumentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VehicleDocumentScalarFieldEnumSchema),
})
