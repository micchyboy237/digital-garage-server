import { z } from "zod"
import { VehicleOwnershipCreateWithoutPostsInputObjectSchema } from "./VehicleOwnershipCreateWithoutPostsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutPostsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutPostsInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutPostsInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutPostsInput.schema"
import { VehicleOwnershipUpsertWithoutPostsInputObjectSchema } from "./VehicleOwnershipUpsertWithoutPostsInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutPostsInputObjectSchema } from "./VehicleOwnershipUpdateWithoutPostsInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutPostsInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutPostsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateOneWithoutPostsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutPostsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutPostsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutPostsInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleOwnershipUpsertWithoutPostsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateWithoutPostsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutPostsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipUpdateOneWithoutPostsNestedInputObjectSchema = Schema
