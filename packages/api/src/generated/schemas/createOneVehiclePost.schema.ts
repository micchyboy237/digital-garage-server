import { z } from "zod"
import { VehiclePostSelectObjectSchema } from "./objects/VehiclePostSelect.schema"
import { VehiclePostIncludeObjectSchema } from "./objects/VehiclePostInclude.schema"
import { VehiclePostCreateInputObjectSchema } from "./objects/VehiclePostCreateInput.schema"
import { VehiclePostUncheckedCreateInputObjectSchema } from "./objects/VehiclePostUncheckedCreateInput.schema"

export const VehiclePostCreateOneSchema = z.object({
  select: VehiclePostSelectObjectSchema.optional(),
  include: VehiclePostIncludeObjectSchema.optional(),
  data: z.union([VehiclePostCreateInputObjectSchema, VehiclePostUncheckedCreateInputObjectSchema]),
})
