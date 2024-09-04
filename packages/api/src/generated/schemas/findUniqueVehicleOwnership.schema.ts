import { z } from "zod"
import { VehicleOwnershipSelectObjectSchema } from "./objects/VehicleOwnershipSelect.schema"
import { VehicleOwnershipIncludeObjectSchema } from "./objects/VehicleOwnershipInclude.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./objects/VehicleOwnershipWhereUniqueInput.schema"

export const VehicleOwnershipFindUniqueSchema = z.object({
  select: VehicleOwnershipSelectObjectSchema.optional(),
  include: VehicleOwnershipIncludeObjectSchema.optional(),
  where: VehicleOwnershipWhereUniqueInputObjectSchema,
})
