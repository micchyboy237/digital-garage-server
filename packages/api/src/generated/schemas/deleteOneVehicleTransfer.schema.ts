import { z } from "zod"
import { VehicleTransferSelectObjectSchema } from "./objects/VehicleTransferSelect.schema"
import { VehicleTransferIncludeObjectSchema } from "./objects/VehicleTransferInclude.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./objects/VehicleTransferWhereUniqueInput.schema"

export const VehicleTransferDeleteOneSchema = z.object({
  select: VehicleTransferSelectObjectSchema.optional(),
  include: VehicleTransferIncludeObjectSchema.optional(),
  where: VehicleTransferWhereUniqueInputObjectSchema,
})
