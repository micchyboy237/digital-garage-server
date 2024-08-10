import { z } from "zod"
import { VehicleEventSelectObjectSchema } from "./objects/VehicleEventSelect.schema"
import { VehicleEventIncludeObjectSchema } from "./objects/VehicleEventInclude.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./objects/VehicleEventWhereUniqueInput.schema"
import { VehicleEventCreateInputObjectSchema } from "./objects/VehicleEventCreateInput.schema"
import { VehicleEventUncheckedCreateInputObjectSchema } from "./objects/VehicleEventUncheckedCreateInput.schema"
import { VehicleEventUpdateInputObjectSchema } from "./objects/VehicleEventUpdateInput.schema"
import { VehicleEventUncheckedUpdateInputObjectSchema } from "./objects/VehicleEventUncheckedUpdateInput.schema"

export const VehicleEventUpsertSchema = z.object({
  select: VehicleEventSelectObjectSchema.optional(),
  include: VehicleEventIncludeObjectSchema.optional(),
  where: VehicleEventWhereUniqueInputObjectSchema,
  create: z.union([VehicleEventCreateInputObjectSchema, VehicleEventUncheckedCreateInputObjectSchema]),
  update: z.union([VehicleEventUpdateInputObjectSchema, VehicleEventUncheckedUpdateInputObjectSchema]),
})
