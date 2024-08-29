import { z } from "zod"
import { VehicleTransferSelectObjectSchema } from "./objects/VehicleTransferSelect.schema"
import { VehicleTransferIncludeObjectSchema } from "./objects/VehicleTransferInclude.schema"
import { VehicleTransferCreateInputObjectSchema } from "./objects/VehicleTransferCreateInput.schema"
import { VehicleTransferUncheckedCreateInputObjectSchema } from "./objects/VehicleTransferUncheckedCreateInput.schema"

export const VehicleTransferCreateOneSchema = z.object({
  select: VehicleTransferSelectObjectSchema.optional(),
  include: VehicleTransferIncludeObjectSchema.optional(),
  data: z.union([VehicleTransferCreateInputObjectSchema, VehicleTransferUncheckedCreateInputObjectSchema]),
})
