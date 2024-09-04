import { z } from "zod"
import { VehiclePostCreateInputObjectSchema } from "./objects/VehiclePostCreateInput.schema"
import { VehiclePostUncheckedCreateInputObjectSchema } from "./objects/VehiclePostUncheckedCreateInput.schema"

export const VehiclePostCreateOneSchema = z.object({
  data: z.union([VehiclePostCreateInputObjectSchema, VehiclePostUncheckedCreateInputObjectSchema]),
})
