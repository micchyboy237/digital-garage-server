import { z } from "zod"
import { VehicleTransferSelectObjectSchema } from "./objects/VehicleTransferSelect.schema"
import { VehicleTransferIncludeObjectSchema } from "./objects/VehicleTransferInclude.schema"
import { VehicleTransferUpdateInputObjectSchema } from "./objects/VehicleTransferUpdateInput.schema"
import { VehicleTransferUncheckedUpdateInputObjectSchema } from "./objects/VehicleTransferUncheckedUpdateInput.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./objects/VehicleTransferWhereUniqueInput.schema"

export const VehicleTransferUpdateOneSchema = z.object({
  select: VehicleTransferSelectObjectSchema.optional(),
  include: VehicleTransferIncludeObjectSchema.optional(),
  data: z.union([VehicleTransferUpdateInputObjectSchema, VehicleTransferUncheckedUpdateInputObjectSchema]),
  where: VehicleTransferWhereUniqueInputObjectSchema,
})
