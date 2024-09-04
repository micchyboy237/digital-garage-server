import { z } from "zod"
import { VehicleUpdateInputObjectSchema } from "./objects/VehicleUpdateInput.schema"
import { VehicleUncheckedUpdateInputObjectSchema } from "./objects/VehicleUncheckedUpdateInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./objects/VehicleWhereUniqueInput.schema"

export const VehicleUpdateOneSchema = z.object({
  data: z.union([VehicleUpdateInputObjectSchema, VehicleUncheckedUpdateInputObjectSchema]),
  where: VehicleWhereUniqueInputObjectSchema,
})
