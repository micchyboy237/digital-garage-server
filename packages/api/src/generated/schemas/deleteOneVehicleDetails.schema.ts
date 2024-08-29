import { z } from "zod"
import { VehicleDetailsSelectObjectSchema } from "./objects/VehicleDetailsSelect.schema"
import { VehicleDetailsIncludeObjectSchema } from "./objects/VehicleDetailsInclude.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./objects/VehicleDetailsWhereUniqueInput.schema"

export const VehicleDetailsDeleteOneSchema = z.object({
  select: VehicleDetailsSelectObjectSchema.optional(),
  include: VehicleDetailsIncludeObjectSchema.optional(),
  where: VehicleDetailsWhereUniqueInputObjectSchema,
})
