import { z } from "zod"
import { DocumentSelectObjectSchema } from "./objects/DocumentSelect.schema"
import { DocumentIncludeObjectSchema } from "./objects/DocumentInclude.schema"
import { DocumentOrderByWithRelationInputObjectSchema } from "./objects/DocumentOrderByWithRelationInput.schema"
import { DocumentWhereInputObjectSchema } from "./objects/DocumentWhereInput.schema"
import { DocumentWhereUniqueInputObjectSchema } from "./objects/DocumentWhereUniqueInput.schema"
import { DocumentScalarFieldEnumSchema } from "./enums/DocumentScalarFieldEnum.schema"

export const DocumentFindFirstSchema = z.object({
  select: DocumentSelectObjectSchema.optional(),
  include: DocumentIncludeObjectSchema.optional(),
  orderBy: z
    .union([DocumentOrderByWithRelationInputObjectSchema, DocumentOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: DocumentWhereInputObjectSchema.optional(),
  cursor: DocumentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DocumentScalarFieldEnumSchema).optional(),
})
