import { z } from "zod"
import { VehicleEventSelectObjectSchema } from "./objects/VehicleEventSelect.schema"
import { VehicleEventIncludeObjectSchema } from "./objects/VehicleEventInclude.schema"
import { VehicleEventOrderByWithRelationInputObjectSchema } from "./objects/VehicleEventOrderByWithRelationInput.schema"
import { VehicleEventWhereInputObjectSchema } from "./objects/VehicleEventWhereInput.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./objects/VehicleEventWhereUniqueInput.schema"
import { VehicleEventScalarFieldEnumSchema } from "./enums/VehicleEventScalarFieldEnum.schema"

export const VehicleEventFindFirstSchema = z.object({
  select: VehicleEventSelectObjectSchema.optional(),
  include: VehicleEventIncludeObjectSchema.optional(),
  orderBy: z
    .union([VehicleEventOrderByWithRelationInputObjectSchema, VehicleEventOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleEventWhereInputObjectSchema.optional(),
  cursor: VehicleEventWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehicleEventScalarFieldEnumSchema).optional(),
})
