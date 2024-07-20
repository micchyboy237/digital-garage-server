import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    vehicleId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    startDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    endDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    isCurrentOwner: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    isTemporaryOwner: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    canEditDocuments: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  })
  .strict()

export const VehicleOwnershipUncheckedUpdateManyInputObjectSchema = Schema
