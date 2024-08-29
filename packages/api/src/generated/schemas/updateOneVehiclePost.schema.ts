import { z } from "zod"
import { VehiclePostSelectObjectSchema } from "./objects/VehiclePostSelect.schema"
import { VehiclePostIncludeObjectSchema } from "./objects/VehiclePostInclude.schema"
import { VehiclePostUpdateInputObjectSchema } from "./objects/VehiclePostUpdateInput.schema"
import { VehiclePostUncheckedUpdateInputObjectSchema } from "./objects/VehiclePostUncheckedUpdateInput.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./objects/VehiclePostWhereUniqueInput.schema"

export const VehiclePostUpdateOneSchema = z.object({
  select: VehiclePostSelectObjectSchema.optional(),
  include: VehiclePostIncludeObjectSchema.optional(),
  data: z.union([VehiclePostUpdateInputObjectSchema, VehiclePostUncheckedUpdateInputObjectSchema]),
  where: VehiclePostWhereUniqueInputObjectSchema,
})
