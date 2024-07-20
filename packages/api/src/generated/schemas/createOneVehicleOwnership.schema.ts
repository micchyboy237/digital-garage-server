import { z } from "zod"
import { VehicleOwnershipSelectObjectSchema } from "./objects/VehicleOwnershipSelect.schema"
import { VehicleOwnershipIncludeObjectSchema } from "./objects/VehicleOwnershipInclude.schema"
import { VehicleOwnershipCreateInputObjectSchema } from "./objects/VehicleOwnershipCreateInput.schema"
import { VehicleOwnershipUncheckedCreateInputObjectSchema } from "./objects/VehicleOwnershipUncheckedCreateInput.schema"

export const VehicleOwnershipCreateOneSchema = z.object({
  select: VehicleOwnershipSelectObjectSchema.optional(),
  include: VehicleOwnershipIncludeObjectSchema.optional(),
  data: z.union([VehicleOwnershipCreateInputObjectSchema, VehicleOwnershipUncheckedCreateInputObjectSchema]),
})
