import { z } from "zod"
import { VehicleTransferSelectObjectSchema } from "./objects/VehicleTransferSelect.schema"
import { VehicleTransferIncludeObjectSchema } from "./objects/VehicleTransferInclude.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./objects/VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferCreateInputObjectSchema } from "./objects/VehicleTransferCreateInput.schema"
import { VehicleTransferUncheckedCreateInputObjectSchema } from "./objects/VehicleTransferUncheckedCreateInput.schema"
import { VehicleTransferUpdateInputObjectSchema } from "./objects/VehicleTransferUpdateInput.schema"
import { VehicleTransferUncheckedUpdateInputObjectSchema } from "./objects/VehicleTransferUncheckedUpdateInput.schema"

export const VehicleTransferUpsertSchema = z.object({
  select: VehicleTransferSelectObjectSchema.optional(),
  include: VehicleTransferIncludeObjectSchema.optional(),
  where: VehicleTransferWhereUniqueInputObjectSchema,
  create: z.union([VehicleTransferCreateInputObjectSchema, VehicleTransferUncheckedCreateInputObjectSchema]),
  update: z.union([VehicleTransferUpdateInputObjectSchema, VehicleTransferUncheckedUpdateInputObjectSchema]),
})
