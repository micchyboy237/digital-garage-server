import { z } from "zod"
import { AuthSelectObjectSchema } from "./objects/AuthSelect.schema"
import { AuthIncludeObjectSchema } from "./objects/AuthInclude.schema"
import { AuthUpdateInputObjectSchema } from "./objects/AuthUpdateInput.schema"
import { AuthUncheckedUpdateInputObjectSchema } from "./objects/AuthUncheckedUpdateInput.schema"
import { AuthWhereUniqueInputObjectSchema } from "./objects/AuthWhereUniqueInput.schema"

export const AuthUpdateOneSchema = z.object({
  select: AuthSelectObjectSchema.optional(),
  include: AuthIncludeObjectSchema.optional(),
  data: z.union([AuthUpdateInputObjectSchema, AuthUncheckedUpdateInputObjectSchema]),
  where: AuthWhereUniqueInputObjectSchema,
})
