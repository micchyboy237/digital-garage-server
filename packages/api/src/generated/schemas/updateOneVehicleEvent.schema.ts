import { z } from "zod"
import { VehicleEventSelectObjectSchema } from "./objects/VehicleEventSelect.schema"
import { VehicleEventIncludeObjectSchema } from "./objects/VehicleEventInclude.schema"
import { VehicleEventUpdateInputObjectSchema } from "./objects/VehicleEventUpdateInput.schema"
import { VehicleEventUncheckedUpdateInputObjectSchema } from "./objects/VehicleEventUncheckedUpdateInput.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./objects/VehicleEventWhereUniqueInput.schema"

export const VehicleEventUpdateOneSchema = z.object({
  select: VehicleEventSelectObjectSchema.optional(),
  include: VehicleEventIncludeObjectSchema.optional(),
  data: z.union([VehicleEventUpdateInputObjectSchema, VehicleEventUncheckedUpdateInputObjectSchema]),
  where: VehicleEventWhereUniqueInputObjectSchema,
})
