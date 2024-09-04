import { z } from "zod"
import { VehicleOwnershipUpdateWithoutPostsInputObjectSchema } from "./VehicleOwnershipUpdateWithoutPostsInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutPostsInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutPostsInput.schema"
import { VehicleOwnershipCreateWithoutPostsInputObjectSchema } from "./VehicleOwnershipCreateWithoutPostsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutPostsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutPostsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpsertWithoutPostsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutPostsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutPostsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutPostsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpsertWithoutPostsInputObjectSchema = Schema
