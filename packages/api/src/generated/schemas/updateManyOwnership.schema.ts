import { z } from "zod"
import { OwnershipUpdateManyMutationInputObjectSchema } from "./objects/OwnershipUpdateManyMutationInput.schema"
import { OwnershipWhereInputObjectSchema } from "./objects/OwnershipWhereInput.schema"

export const OwnershipUpdateManySchema = z.object({
  data: OwnershipUpdateManyMutationInputObjectSchema,
  where: OwnershipWhereInputObjectSchema.optional(),
})
