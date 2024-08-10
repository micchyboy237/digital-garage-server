import { z } from "zod"
import { VehicleOwnershipSelectObjectSchema } from "./objects/VehicleOwnershipSelect.schema"
import { VehicleOwnershipIncludeObjectSchema } from "./objects/VehicleOwnershipInclude.schema"
import { VehicleOwnershipOrderByWithRelationInputObjectSchema } from "./objects/VehicleOwnershipOrderByWithRelationInput.schema"
import { VehicleOwnershipWhereInputObjectSchema } from "./objects/VehicleOwnershipWhereInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./objects/VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipScalarFieldEnumSchema } from "./enums/VehicleOwnershipScalarFieldEnum.schema"

export const VehicleOwnershipFindFirstSchema = z.object({
  select: VehicleOwnershipSelectObjectSchema.optional(),
  include: VehicleOwnershipIncludeObjectSchema.optional(),
  orderBy: z
    .union([VehicleOwnershipOrderByWithRelationInputObjectSchema, VehicleOwnershipOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleOwnershipWhereInputObjectSchema.optional(),
  cursor: VehicleOwnershipWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehicleOwnershipScalarFieldEnumSchema).optional(),
})
