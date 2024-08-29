import { z } from "zod"
import { OwnershipSelectObjectSchema } from "./objects/OwnershipSelect.schema"
import { OwnershipIncludeObjectSchema } from "./objects/OwnershipInclude.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./objects/OwnershipWhereUniqueInput.schema"

export const OwnershipDeleteOneSchema = z.object({
  select: OwnershipSelectObjectSchema.optional(),
  include: OwnershipIncludeObjectSchema.optional(),
  where: OwnershipWhereUniqueInputObjectSchema,
})
