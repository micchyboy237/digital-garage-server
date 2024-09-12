import { z } from "zod"
import { VehiclePostScalarWhereInputObjectSchema } from "./VehiclePostScalarWhereInput.schema"
import { VehiclePostUpdateManyMutationInputObjectSchema } from "./VehiclePostUpdateManyMutationInput.schema"
import { VehiclePostUncheckedUpdateManyWithoutPostsInputObjectSchema } from "./VehiclePostUncheckedUpdateManyWithoutPostsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpdateManyWithWhereWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => VehiclePostScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehiclePostUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehiclePostUncheckedUpdateManyWithoutPostsInputObjectSchema),
    ]),
  })
  .strict()

export const VehiclePostUpdateManyWithWhereWithoutCreatedByInputObjectSchema = Schema
