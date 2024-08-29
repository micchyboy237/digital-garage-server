import { z } from "zod"
import { VehicleDetailsSelectObjectSchema } from "./objects/VehicleDetailsSelect.schema"
import { VehicleDetailsIncludeObjectSchema } from "./objects/VehicleDetailsInclude.schema"
import { VehicleDetailsCreateInputObjectSchema } from "./objects/VehicleDetailsCreateInput.schema"
import { VehicleDetailsUncheckedCreateInputObjectSchema } from "./objects/VehicleDetailsUncheckedCreateInput.schema"

export const VehicleDetailsCreateOneSchema = z.object({
  select: VehicleDetailsSelectObjectSchema.optional(),
  include: VehicleDetailsIncludeObjectSchema.optional(),
  data: z.union([VehicleDetailsCreateInputObjectSchema, VehicleDetailsUncheckedCreateInputObjectSchema]),
})
