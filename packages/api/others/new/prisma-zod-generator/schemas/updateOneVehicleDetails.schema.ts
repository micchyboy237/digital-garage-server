import { z } from "zod"
import { VehicleDetailsUpdateInputObjectSchema } from "./objects/VehicleDetailsUpdateInput.schema"
import { VehicleDetailsUncheckedUpdateInputObjectSchema } from "./objects/VehicleDetailsUncheckedUpdateInput.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./objects/VehicleDetailsWhereUniqueInput.schema"

export const VehicleDetailsUpdateOneSchema = z.object({
  data: z.union([VehicleDetailsUpdateInputObjectSchema, VehicleDetailsUncheckedUpdateInputObjectSchema]),
  where: VehicleDetailsWhereUniqueInputObjectSchema,
})
