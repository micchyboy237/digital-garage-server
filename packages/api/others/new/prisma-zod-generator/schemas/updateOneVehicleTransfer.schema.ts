import { z } from "zod"
import { VehicleTransferUpdateInputObjectSchema } from "./objects/VehicleTransferUpdateInput.schema"
import { VehicleTransferUncheckedUpdateInputObjectSchema } from "./objects/VehicleTransferUncheckedUpdateInput.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./objects/VehicleTransferWhereUniqueInput.schema"

export const VehicleTransferUpdateOneSchema = z.object({
  data: z.union([VehicleTransferUpdateInputObjectSchema, VehicleTransferUncheckedUpdateInputObjectSchema]),
  where: VehicleTransferWhereUniqueInputObjectSchema,
})
