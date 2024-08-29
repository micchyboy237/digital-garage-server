import { z } from "zod"
import { OwnershipSelectObjectSchema } from "./objects/OwnershipSelect.schema"
import { OwnershipIncludeObjectSchema } from "./objects/OwnershipInclude.schema"
import { OwnershipOrderByWithRelationInputObjectSchema } from "./objects/OwnershipOrderByWithRelationInput.schema"
import { OwnershipWhereInputObjectSchema } from "./objects/OwnershipWhereInput.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./objects/OwnershipWhereUniqueInput.schema"
import { OwnershipScalarFieldEnumSchema } from "./enums/OwnershipScalarFieldEnum.schema"

export const OwnershipFindFirstSchema = z.object({
  select: OwnershipSelectObjectSchema.optional(),
  include: OwnershipIncludeObjectSchema.optional(),
  orderBy: z
    .union([OwnershipOrderByWithRelationInputObjectSchema, OwnershipOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: OwnershipWhereInputObjectSchema.optional(),
  cursor: OwnershipWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(OwnershipScalarFieldEnumSchema).optional(),
})
