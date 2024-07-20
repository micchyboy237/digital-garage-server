import { z } from "zod"
import { AuthSelectObjectSchema } from "./objects/AuthSelect.schema"
import { AuthIncludeObjectSchema } from "./objects/AuthInclude.schema"
import { AuthWhereUniqueInputObjectSchema } from "./objects/AuthWhereUniqueInput.schema"

export const AuthFindUniqueSchema = z.object({
  select: AuthSelectObjectSchema.optional(),
  include: AuthIncludeObjectSchema.optional(),
  where: AuthWhereUniqueInputObjectSchema,
})
