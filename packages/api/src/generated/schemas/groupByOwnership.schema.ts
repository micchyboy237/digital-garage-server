import { z } from "zod"
import { OwnershipWhereInputObjectSchema } from "./objects/OwnershipWhereInput.schema"
import { OwnershipOrderByWithAggregationInputObjectSchema } from "./objects/OwnershipOrderByWithAggregationInput.schema"
import { OwnershipScalarWhereWithAggregatesInputObjectSchema } from "./objects/OwnershipScalarWhereWithAggregatesInput.schema"
import { OwnershipScalarFieldEnumSchema } from "./enums/OwnershipScalarFieldEnum.schema"

export const OwnershipGroupBySchema = z.object({
  where: OwnershipWhereInputObjectSchema.optional(),
  orderBy: z
    .union([OwnershipOrderByWithAggregationInputObjectSchema, OwnershipOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: OwnershipScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(OwnershipScalarFieldEnumSchema),
})
