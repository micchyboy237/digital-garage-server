import { z } from "zod"
import { VehiclePostUpdateInputObjectSchema } from "./objects/VehiclePostUpdateInput.schema"
import { VehiclePostUncheckedUpdateInputObjectSchema } from "./objects/VehiclePostUncheckedUpdateInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./objects/VehiclePostWhereUniqueInput.schema"

export const VehiclePostUpdateOneSchema = z.object({
  data: z.union([VehiclePostUpdateInputObjectSchema, VehiclePostUncheckedUpdateInputObjectSchema]),
  where: VehiclePostWhereUniqueInputObjectSchema,
})
