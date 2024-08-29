import { z } from "zod"
import { VehicleTransferUpdateManyMutationInputObjectSchema } from "./objects/VehicleTransferUpdateManyMutationInput.schema"
import { VehicleTransferWhereInputObjectSchema } from "./objects/VehicleTransferWhereInput.schema"

export const VehicleTransferUpdateManySchema = z.object({
  data: VehicleTransferUpdateManyMutationInputObjectSchema,
  where: VehicleTransferWhereInputObjectSchema.optional(),
})
