import { z } from "zod"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"
import { VehicleCreateNestedOneWithoutTransfersInputObjectSchema } from "./VehicleCreateNestedOneWithoutTransfersInput.schema"
import { UserCreateNestedOneWithoutTransfersSentInputObjectSchema } from "./UserCreateNestedOneWithoutTransfersSentInput.schema"
import { UserCreateNestedOneWithoutTransfersReceivedInputObjectSchema } from "./UserCreateNestedOneWithoutTransfersReceivedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => TransferStatusSchema).optional(),
    transferDate: z.coerce.date().optional(),
    responseDate: z.coerce.date().optional().nullable(),
    reason: z.string().optional().nullable(),
    vehicle: z.lazy(() => VehicleCreateNestedOneWithoutTransfersInputObjectSchema).optional(),
    sender: z.lazy(() => UserCreateNestedOneWithoutTransfersSentInputObjectSchema).optional(),
    recipient: z.lazy(() => UserCreateNestedOneWithoutTransfersReceivedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleTransferCreateInputObjectSchema = Schema
