import { z } from "zod"
import { AuthSelectObjectSchema } from "./objects/AuthSelect.schema"
import { AuthIncludeObjectSchema } from "./objects/AuthInclude.schema"
import { AuthCreateInputObjectSchema } from "./objects/AuthCreateInput.schema"
import { AuthUncheckedCreateInputObjectSchema } from "./objects/AuthUncheckedCreateInput.schema"

export const AuthCreateOneSchema = z.object({
  select: AuthSelectObjectSchema.optional(),
  include: AuthIncludeObjectSchema.optional(),
  data: z.union([AuthCreateInputObjectSchema, AuthUncheckedCreateInputObjectSchema]),
})
