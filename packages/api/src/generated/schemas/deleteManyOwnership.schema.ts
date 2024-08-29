import { z } from "zod"
import { OwnershipWhereInputObjectSchema } from "./objects/OwnershipWhereInput.schema"

export const OwnershipDeleteManySchema = z.object({ where: OwnershipWhereInputObjectSchema.optional() })
