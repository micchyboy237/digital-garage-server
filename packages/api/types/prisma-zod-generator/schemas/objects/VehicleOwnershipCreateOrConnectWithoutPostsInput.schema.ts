import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateWithoutPostsInputObjectSchema } from "./VehicleOwnershipCreateWithoutPostsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutPostsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutPostsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateOrConnectWithoutPostsInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutPostsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipCreateOrConnectWithoutPostsInputObjectSchema = Schema
