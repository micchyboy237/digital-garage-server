import { z } from "zod"
import { VehicleOwnershipUpdateInputObjectSchema } from "./objects/VehicleOwnershipUpdateInput.schema"
import { VehicleOwnershipUncheckedUpdateInputObjectSchema } from "./objects/VehicleOwnershipUncheckedUpdateInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./objects/VehicleOwnershipWhereUniqueInput.schema"

export const VehicleOwnershipUpdateOneSchema = z.object({
  data: z.union([VehicleOwnershipUpdateInputObjectSchema, VehicleOwnershipUncheckedUpdateInputObjectSchema]),
  where: VehicleOwnershipWhereUniqueInputObjectSchema,
})
