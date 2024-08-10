import { z } from "zod"
import { VehicleDetailsSelectObjectSchema } from "./objects/VehicleDetailsSelect.schema"
import { VehicleDetailsIncludeObjectSchema } from "./objects/VehicleDetailsInclude.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./objects/VehicleDetailsWhereUniqueInput.schema"
import { VehicleDetailsCreateInputObjectSchema } from "./objects/VehicleDetailsCreateInput.schema"
import { VehicleDetailsUncheckedCreateInputObjectSchema } from "./objects/VehicleDetailsUncheckedCreateInput.schema"
import { VehicleDetailsUpdateInputObjectSchema } from "./objects/VehicleDetailsUpdateInput.schema"
import { VehicleDetailsUncheckedUpdateInputObjectSchema } from "./objects/VehicleDetailsUncheckedUpdateInput.schema"

export const VehicleDetailsUpsertSchema = z.object({
  select: VehicleDetailsSelectObjectSchema.optional(),
  include: VehicleDetailsIncludeObjectSchema.optional(),
  where: VehicleDetailsWhereUniqueInputObjectSchema,
  create: z.union([VehicleDetailsCreateInputObjectSchema, VehicleDetailsUncheckedCreateInputObjectSchema]),
  update: z.union([VehicleDetailsUpdateInputObjectSchema, VehicleDetailsUncheckedUpdateInputObjectSchema]),
})
