import { z } from "zod"
import { VehicleTransferOrderByWithRelationInputObjectSchema } from "./objects/VehicleTransferOrderByWithRelationInput.schema"
import { VehicleTransferWhereInputObjectSchema } from "./objects/VehicleTransferWhereInput.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./objects/VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferScalarFieldEnumSchema } from "./enums/VehicleTransferScalarFieldEnum.schema"

export const VehicleTransferFindFirstSchema = z.object({
  orderBy: z
    .union([VehicleTransferOrderByWithRelationInputObjectSchema, VehicleTransferOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleTransferWhereInputObjectSchema.optional(),
  cursor: VehicleTransferWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehicleTransferScalarFieldEnumSchema).optional(),
})
