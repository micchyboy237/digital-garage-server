import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumTransferStatusFilterObjectSchema } from "./EnumTransferStatusFilter.schema"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VehicleTransferScalarWhereInputObjectSchema),
        z.lazy(() => VehicleTransferScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VehicleTransferScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VehicleTransferScalarWhereInputObjectSchema),
        z.lazy(() => VehicleTransferScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    vehicleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    senderId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    recipientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    status: z.union([z.lazy(() => EnumTransferStatusFilterObjectSchema), z.lazy(() => TransferStatusSchema)]).optional(),
    transferDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    responseDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    reason: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleTransferScalarWhereInputObjectSchema = Schema
