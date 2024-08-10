import { z } from "zod"
import { VehicleSelectObjectSchema } from "./objects/VehicleSelect.schema"
import { VehicleIncludeObjectSchema } from "./objects/VehicleInclude.schema"
import { VehicleWhereUniqueInputObjectSchema } from "./objects/VehicleWhereUniqueInput.schema"
import { VehicleCreateInputObjectSchema } from "./objects/VehicleCreateInput.schema"
import { VehicleUncheckedCreateInputObjectSchema } from "./objects/VehicleUncheckedCreateInput.schema"
import { VehicleUpdateInputObjectSchema } from "./objects/VehicleUpdateInput.schema"
import { VehicleUncheckedUpdateInputObjectSchema } from "./objects/VehicleUncheckedUpdateInput.schema"

export const VehicleUpsertSchema = z.object({
  select: VehicleSelectObjectSchema.optional(),
  include: VehicleIncludeObjectSchema.optional(),
  where: VehicleWhereUniqueInputObjectSchema,
  create: z.union([VehicleCreateInputObjectSchema, VehicleUncheckedCreateInputObjectSchema]),
  update: z.union([VehicleUpdateInputObjectSchema, VehicleUncheckedUpdateInputObjectSchema]),
})
