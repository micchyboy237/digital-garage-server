import { z } from "zod"
import { VehiclePostSelectObjectSchema } from "./objects/VehiclePostSelect.schema"
import { VehiclePostIncludeObjectSchema } from "./objects/VehiclePostInclude.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./objects/VehiclePostWhereUniqueInput.schema"

export const VehiclePostDeleteOneSchema = z.object({
  select: VehiclePostSelectObjectSchema.optional(),
  include: VehiclePostIncludeObjectSchema.optional(),
  where: VehiclePostWhereUniqueInputObjectSchema,
})
