import { z } from "zod"
import { VehicleDetailsSelectObjectSchema } from "./objects/VehicleDetailsSelect.schema"
import { VehicleDetailsIncludeObjectSchema } from "./objects/VehicleDetailsInclude.schema"
import { VehicleDetailsOrderByWithRelationInputObjectSchema } from "./objects/VehicleDetailsOrderByWithRelationInput.schema"
import { VehicleDetailsWhereInputObjectSchema } from "./objects/VehicleDetailsWhereInput.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./objects/VehicleDetailsWhereUniqueInput.schema"
import { VehicleDetailsScalarFieldEnumSchema } from "./enums/VehicleDetailsScalarFieldEnum.schema"

export const VehicleDetailsFindManySchema = z.object({
  select: z.lazy(() => VehicleDetailsSelectObjectSchema.optional()),
  include: z.lazy(() => VehicleDetailsIncludeObjectSchema.optional()),
  orderBy: z
    .union([VehicleDetailsOrderByWithRelationInputObjectSchema, VehicleDetailsOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleDetailsWhereInputObjectSchema.optional(),
  cursor: VehicleDetailsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehicleDetailsScalarFieldEnumSchema).optional(),
})
