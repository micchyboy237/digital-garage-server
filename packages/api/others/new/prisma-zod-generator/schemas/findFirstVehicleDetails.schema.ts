import { z } from "zod"
import { VehicleDetailsOrderByWithRelationInputObjectSchema } from "./objects/VehicleDetailsOrderByWithRelationInput.schema"
import { VehicleDetailsWhereInputObjectSchema } from "./objects/VehicleDetailsWhereInput.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./objects/VehicleDetailsWhereUniqueInput.schema"
import { VehicleDetailsScalarFieldEnumSchema } from "./enums/VehicleDetailsScalarFieldEnum.schema"

export const VehicleDetailsFindFirstSchema = z.object({
  orderBy: z
    .union([VehicleDetailsOrderByWithRelationInputObjectSchema, VehicleDetailsOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleDetailsWhereInputObjectSchema.optional(),
  cursor: VehicleDetailsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehicleDetailsScalarFieldEnumSchema).optional(),
})
