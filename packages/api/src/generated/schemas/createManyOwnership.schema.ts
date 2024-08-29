import { z } from "zod"
import { OwnershipCreateManyInputObjectSchema } from "./objects/OwnershipCreateManyInput.schema"

export const OwnershipCreateManySchema = z.object({
  data: z.union([OwnershipCreateManyInputObjectSchema, z.array(OwnershipCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
