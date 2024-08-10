import { z } from "zod"
import { VehicleOwnershipSelectObjectSchema } from "./objects/VehicleOwnershipSelect.schema"
import { VehicleOwnershipIncludeObjectSchema } from "./objects/VehicleOwnershipInclude.schema"
import { VehicleOwnershipUpdateInputObjectSchema } from "./objects/VehicleOwnershipUpdateInput.schema"
import { VehicleOwnershipUncheckedUpdateInputObjectSchema } from "./objects/VehicleOwnershipUncheckedUpdateInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./objects/VehicleOwnershipWhereUniqueInput.schema"

export const VehicleOwnershipUpdateOneSchema = z.object({
  select: VehicleOwnershipSelectObjectSchema.optional(),
  include: VehicleOwnershipIncludeObjectSchema.optional(),
  data: z.union([VehicleOwnershipUpdateInputObjectSchema, VehicleOwnershipUncheckedUpdateInputObjectSchema]),
  where: VehicleOwnershipWhereUniqueInputObjectSchema,
})
