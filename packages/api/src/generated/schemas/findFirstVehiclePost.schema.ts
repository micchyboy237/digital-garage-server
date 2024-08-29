import { z } from "zod"
import { VehiclePostSelectObjectSchema } from "./objects/VehiclePostSelect.schema"
import { VehiclePostIncludeObjectSchema } from "./objects/VehiclePostInclude.schema"
import { VehiclePostOrderByWithRelationInputObjectSchema } from "./objects/VehiclePostOrderByWithRelationInput.schema"
import { VehiclePostWhereInputObjectSchema } from "./objects/VehiclePostWhereInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./objects/VehiclePostWhereUniqueInput.schema"
import { VehiclePostScalarFieldEnumSchema } from "./enums/VehiclePostScalarFieldEnum.schema"

export const VehiclePostFindFirstSchema = z.object({
  select: VehiclePostSelectObjectSchema.optional(),
  include: VehiclePostIncludeObjectSchema.optional(),
  orderBy: z
    .union([VehiclePostOrderByWithRelationInputObjectSchema, VehiclePostOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehiclePostWhereInputObjectSchema.optional(),
  cursor: VehiclePostWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehiclePostScalarFieldEnumSchema).optional(),
})
