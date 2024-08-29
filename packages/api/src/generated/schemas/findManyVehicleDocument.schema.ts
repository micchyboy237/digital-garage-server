import { z } from "zod"
import { VehicleDocumentSelectObjectSchema } from "./objects/VehicleDocumentSelect.schema"
import { VehicleDocumentIncludeObjectSchema } from "./objects/VehicleDocumentInclude.schema"
import { VehicleDocumentOrderByWithRelationInputObjectSchema } from "./objects/VehicleDocumentOrderByWithRelationInput.schema"
import { VehicleDocumentWhereInputObjectSchema } from "./objects/VehicleDocumentWhereInput.schema"
import { VehicleDocumentWhereUniqueInputObjectSchema } from "./objects/VehicleDocumentWhereUniqueInput.schema"
import { VehicleDocumentScalarFieldEnumSchema } from "./enums/VehicleDocumentScalarFieldEnum.schema"

export const VehicleDocumentFindManySchema = z.object({
  select: z.lazy(() => VehicleDocumentSelectObjectSchema.optional()),
  include: z.lazy(() => VehicleDocumentIncludeObjectSchema.optional()),
  orderBy: z
    .union([VehicleDocumentOrderByWithRelationInputObjectSchema, VehicleDocumentOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: VehicleDocumentWhereInputObjectSchema.optional(),
  cursor: VehicleDocumentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VehicleDocumentScalarFieldEnumSchema).optional(),
})
