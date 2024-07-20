import { z } from "zod"
import { VehicleSelectObjectSchema } from "./objects/VehicleSelect.schema"
import { VehicleIncludeObjectSchema } from "./objects/VehicleInclude.schema"
import { VehicleUpdateInputObjectSchema } from "./objects/VehicleUpdateInput.schema"
import { VehicleUncheckedUpdateInputObjectSchema } from "./objects/VehicleUncheckedUpdateInput.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./objects/VehicleWhereUniqueInput.schema"

export const VehicleUpdateOneSchema = z.object({
  select: VehicleSelectObjectSchema.optional(),
  include: VehicleIncludeObjectSchema.optional(),
  data: z.union([VehicleUpdateInputObjectSchema, VehicleUncheckedUpdateInputObjectSchema]),
  where: VehicleWhereUniqueInputObjectSchema,
})
