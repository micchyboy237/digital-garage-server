import { z } from "zod"
import { OwnershipSelectObjectSchema } from "./objects/OwnershipSelect.schema"
import { OwnershipIncludeObjectSchema } from "./objects/OwnershipInclude.schema"
import { OwnershipCreateInputObjectSchema } from "./objects/OwnershipCreateInput.schema"
import { OwnershipUncheckedCreateInputObjectSchema } from "./objects/OwnershipUncheckedCreateInput.schema"

export const OwnershipCreateOneSchema = z.object({
  select: OwnershipSelectObjectSchema.optional(),
  include: OwnershipIncludeObjectSchema.optional(),
  data: z.union([OwnershipCreateInputObjectSchema, OwnershipUncheckedCreateInputObjectSchema]),
})
