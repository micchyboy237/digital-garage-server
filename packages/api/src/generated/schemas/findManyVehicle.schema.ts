import { z } from "zod"
import { VehicleSelectObjectSchema } from "./objects/VehicleSelect.schema"
import { VehicleIncludeObjectSchema } from "./objects/VehicleInclude.schema"
import { VehicleOrderByWithRelationInputObjectSchema } from "./objects/VehicleOrderByWithRelationInput.schema"
import { VehicleWhereInputObjectSchema } from "./objects/VehicleWhereInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./objects/VehicleWhereUniqueInput.schema"
import { VehicleScalarFieldEnumSchema } from "./enums/VehicleScalarFieldEnum.schema"

export const VehicleFindManySchema = z.object({
  select: z.lazy(() => VehicleSelectObjectSchema.optional()),
  include: z.lazy(() => VehicleIncludeObjectSchema.optional()),
  orderBy: z.union([VehicleOrderByWithRelationInputObjectSchema, VehicleOrderByWithRelationInputObjectSchema.array()]).optional(),
  where: VehicleWhereInputObjectSchema.optional(),
  cursor: VehicleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehicleScalarFieldEnumSchema).optional(),
})
