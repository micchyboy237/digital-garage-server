import { z } from "zod"
import { VehicleDetailsSelectObjectSchema } from "./objects/VehicleDetailsSelect.schema"
import { VehicleDetailsIncludeObjectSchema } from "./objects/VehicleDetailsInclude.schema"
import { VehicleDetailsUpdateInputObjectSchema } from "./objects/VehicleDetailsUpdateInput.schema"
import { VehicleDetailsUncheckedUpdateInputObjectSchema } from "./objects/VehicleDetailsUncheckedUpdateInput.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./objects/VehicleDetailsWhereUniqueInput.schema"

export const VehicleDetailsUpdateOneSchema = z.object({
  select: VehicleDetailsSelectObjectSchema.optional(),
  include: VehicleDetailsIncludeObjectSchema.optional(),
  data: z.union([VehicleDetailsUpdateInputObjectSchema, VehicleDetailsUncheckedUpdateInputObjectSchema]),
  where: VehicleDetailsWhereUniqueInputObjectSchema,
})
