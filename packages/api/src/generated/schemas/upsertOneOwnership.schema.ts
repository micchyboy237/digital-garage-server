import { z } from "zod"
import { OwnershipSelectObjectSchema } from "./objects/OwnershipSelect.schema"
import { OwnershipIncludeObjectSchema } from "./objects/OwnershipInclude.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./objects/OwnershipWhereUniqueInput.schema"
import { OwnershipCreateInputObjectSchema } from "./objects/OwnershipCreateInput.schema"
import { OwnershipUncheckedCreateInputObjectSchema } from "./objects/OwnershipUncheckedCreateInput.schema"
import { OwnershipUpdateInputObjectSchema } from "./objects/OwnershipUpdateInput.schema"
import { OwnershipUncheckedUpdateInputObjectSchema } from "./objects/OwnershipUncheckedUpdateInput.schema"

export const OwnershipUpsertSchema = z.object({
  select: OwnershipSelectObjectSchema.optional(),
  include: OwnershipIncludeObjectSchema.optional(),
  where: OwnershipWhereUniqueInputObjectSchema,
  create: z.union([OwnershipCreateInputObjectSchema, OwnershipUncheckedCreateInputObjectSchema]),
  update: z.union([OwnershipUpdateInputObjectSchema, OwnershipUncheckedUpdateInputObjectSchema]),
})
