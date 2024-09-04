import { z } from "zod"
import { VehiclePostOrderByWithRelationInputObjectSchema } from "./objects/VehiclePostOrderByWithRelationInput.schema"
import { VehiclePostWhereInputObjectSchema } from "./objects/VehiclePostWhereInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./objects/VehiclePostWhereUniqueInput.schema"
import { VehiclePostScalarFieldEnumSchema } from "./enums/VehiclePostScalarFieldEnum.schema"

export const VehiclePostFindManySchema = z.object({
  orderBy: z
    .union([VehiclePostOrderByWithRelationInputObjectSchema, VehiclePostOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehiclePostWhereInputObjectSchema.optional(),
  cursor: VehiclePostWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehiclePostScalarFieldEnumSchema).optional(),
})
