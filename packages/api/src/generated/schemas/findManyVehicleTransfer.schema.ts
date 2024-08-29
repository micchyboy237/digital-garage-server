import { z } from "zod"
import { VehicleTransferSelectObjectSchema } from "./objects/VehicleTransferSelect.schema"
import { VehicleTransferIncludeObjectSchema } from "./objects/VehicleTransferInclude.schema"
import { VehicleTransferOrderByWithRelationInputObjectSchema } from "./objects/VehicleTransferOrderByWithRelationInput.schema"
import { VehicleTransferWhereInputObjectSchema } from "./objects/VehicleTransferWhereInput.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./objects/VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferScalarFieldEnumSchema } from "./enums/VehicleTransferScalarFieldEnum.schema"

export const VehicleTransferFindManySchema = z.object({
  select: z.lazy(() => VehicleTransferSelectObjectSchema.optional()),
  include: z.lazy(() => VehicleTransferIncludeObjectSchema.optional()),
  orderBy: z
    .union([VehicleTransferOrderByWithRelationInputObjectSchema, VehicleTransferOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleTransferWhereInputObjectSchema.optional(),
  cursor: VehicleTransferWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehicleTransferScalarFieldEnumSchema).optional(),
})
