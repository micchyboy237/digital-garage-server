import { z } from "zod"
import { VehicleSelectObjectSchema } from "./objects/VehicleSelect.schema"
import { VehicleIncludeObjectSchema } from "./objects/VehicleInclude.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./objects/VehicleWhereUniqueInput.schema"

export const VehicleDeleteOneSchema = z.object({
  select: VehicleSelectObjectSchema.optional(),
  include: VehicleIncludeObjectSchema.optional(),
  where: VehicleWhereUniqueInputObjectSchema,
})
