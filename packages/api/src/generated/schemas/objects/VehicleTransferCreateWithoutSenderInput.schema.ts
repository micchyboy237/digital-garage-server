import { z } from "zod"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"
import { VehicleTransferCreateexcludedMediaFileTypesInputObjectSchema } from "./VehicleTransferCreateexcludedMediaFileTypesInput.schema"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { VehicleCreateNestedOneWithoutTransfersInputObjectSchema } from "./VehicleCreateNestedOneWithoutTransfersInput.schema"
import { UserCreateNestedOneWithoutTransfersReceivedInputObjectSchema } from "./UserCreateNestedOneWithoutTransfersReceivedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateWithoutSenderInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => TransferStatusSchema).optional(),
    transferDate: z.coerce.date().optional(),
    responseDate: z.coerce.date().optional().nullable(),
    reason: z.string().optional().nullable(),
    excludedMediaFileTypes: z
      .union([
        z.lazy(() => VehicleTransferCreateexcludedMediaFileTypesInputObjectSchema),
        z.lazy(() => MediaFileTypeSchema).array(),
      ])
      .optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vehicle: z.lazy(() => VehicleCreateNestedOneWithoutTransfersInputObjectSchema).optional(),
    recipient: z.lazy(() => UserCreateNestedOneWithoutTransfersReceivedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleTransferCreateWithoutSenderInputObjectSchema = Schema
