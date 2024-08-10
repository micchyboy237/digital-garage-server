import { z } from "zod"
import { VehicleEventSelectObjectSchema } from "./objects/VehicleEventSelect.schema"
import { VehicleEventIncludeObjectSchema } from "./objects/VehicleEventInclude.schema"
import { VehicleEventCreateInputObjectSchema } from "./objects/VehicleEventCreateInput.schema"
import { VehicleEventUncheckedCreateInputObjectSchema } from "./objects/VehicleEventUncheckedCreateInput.schema"

export const VehicleEventCreateOneSchema = z.object({
  select: VehicleEventSelectObjectSchema.optional(),
  include: VehicleEventIncludeObjectSchema.optional(),
  data: z.union([VehicleEventCreateInputObjectSchema, VehicleEventUncheckedCreateInputObjectSchema]),
})
