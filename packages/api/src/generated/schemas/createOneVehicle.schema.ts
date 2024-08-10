import { z } from "zod"
import { VehicleSelectObjectSchema } from "./objects/VehicleSelect.schema"
import { VehicleIncludeObjectSchema } from "./objects/VehicleInclude.schema"
import { VehicleCreateInputObjectSchema } from "./objects/VehicleCreateInput.schema"
import { VehicleUncheckedCreateInputObjectSchema } from "./objects/VehicleUncheckedCreateInput.schema"

export const VehicleCreateOneSchema = z.object({
  select: VehicleSelectObjectSchema.optional(),
  include: VehicleIncludeObjectSchema.optional(),
  data: z.union([VehicleCreateInputObjectSchema, VehicleUncheckedCreateInputObjectSchema]),
})
