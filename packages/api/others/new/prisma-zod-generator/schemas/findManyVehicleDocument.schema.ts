import { z } from "zod"
import { VehicleDocumentOrderByWithRelationInputObjectSchema } from "./objects/VehicleDocumentOrderByWithRelationInput.schema"
import { VehicleDocumentWhereInputObjectSchema } from "./objects/VehicleDocumentWhereInput.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./objects/VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentScalarFieldEnumSchema } from "./enums/VehicleDocumentScalarFieldEnum.schema"

export const VehicleDocumentFindManySchema = z.object({
  orderBy: z
    .union([VehicleDocumentOrderByWithRelationInputObjectSchema, VehicleDocumentOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleDocumentWhereInputObjectSchema.optional(),
  cursor: VehicleDocumentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehicleDocumentScalarFieldEnumSchema).optional(),
})
