import { z } from "zod"
import { VehicleEventSelectObjectSchema } from "./objects/VehicleEventSelect.schema"
import { VehicleEventIncludeObjectSchema } from "./objects/VehicleEventInclude.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./objects/VehicleEventWhereUniqueInput.schema"

export const VehicleEventDeleteOneSchema = z.object({
  select: VehicleEventSelectObjectSchema.optional(),
  include: VehicleEventIncludeObjectSchema.optional(),
  where: VehicleEventWhereUniqueInputObjectSchema,
})
