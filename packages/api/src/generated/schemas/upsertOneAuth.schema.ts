import { z } from "zod"
import { AuthSelectObjectSchema } from "./objects/AuthSelect.schema"
import { AuthIncludeObjectSchema } from "./objects/AuthInclude.schema"
import { AuthWhereUniqueInputObjectSchema } from "./objects/AuthWhereUniqueInput.schema"
import { AuthCreateInputObjectSchema } from "./objects/AuthCreateInput.schema"
import { AuthUncheckedCreateInputObjectSchema } from "./objects/AuthUncheckedCreateInput.schema"
import { AuthUpdateInputObjectSchema } from "./objects/AuthUpdateInput.schema"
import { AuthUncheckedUpdateInputObjectSchema } from "./objects/AuthUncheckedUpdateInput.schema"

export const AuthUpsertSchema = z.object({
  select: AuthSelectObjectSchema.optional(),
  include: AuthIncludeObjectSchema.optional(),
  where: AuthWhereUniqueInputObjectSchema,
  create: z.union([AuthCreateInputObjectSchema, AuthUncheckedCreateInputObjectSchema]),
  update: z.union([AuthUpdateInputObjectSchema, AuthUncheckedUpdateInputObjectSchema]),
})
