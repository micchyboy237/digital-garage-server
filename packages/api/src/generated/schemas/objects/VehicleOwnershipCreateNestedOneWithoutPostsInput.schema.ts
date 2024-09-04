import { z } from "zod"
import { VehicleOwnershipCreateWithoutPostsInputObjectSchema } from "./VehicleOwnershipCreateWithoutPostsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutPostsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutPostsInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutPostsInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutPostsInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateNestedOneWithoutPostsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutPostsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutPostsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutPostsInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCreateNestedOneWithoutPostsInputObjectSchema = Schema
