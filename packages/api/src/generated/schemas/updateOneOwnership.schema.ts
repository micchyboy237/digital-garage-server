import { z } from "zod"
import { OwnershipSelectObjectSchema } from "./objects/OwnershipSelect.schema"
import { OwnershipIncludeObjectSchema } from "./objects/OwnershipInclude.schema"
import { OwnershipUpdateInputObjectSchema } from "./objects/OwnershipUpdateInput.schema"
import { OwnershipUncheckedUpdateInputObjectSchema } from "./objects/OwnershipUncheckedUpdateInput.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./objects/OwnershipWhereUniqueInput.schema"

export const OwnershipUpdateOneSchema = z.object({
  select: OwnershipSelectObjectSchema.optional(),
  include: OwnershipIncludeObjectSchema.optional(),
  data: z.union([OwnershipUpdateInputObjectSchema, OwnershipUncheckedUpdateInputObjectSchema]),
  where: OwnershipWhereUniqueInputObjectSchema,
})
