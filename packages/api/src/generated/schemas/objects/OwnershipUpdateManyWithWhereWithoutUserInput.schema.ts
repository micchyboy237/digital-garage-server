import { z } from "zod"
import { OwnershipScalarWhereInputObjectSchema } from "./OwnershipScalarWhereInput.schema"
import { OwnershipUpdateManyMutationInputObjectSchema } from "./OwnershipUpdateManyMutationInput.schema"
import { OwnershipUncheckedUpdateManyWithoutOwnershipsInputObjectSchema } from "./OwnershipUncheckedUpdateManyWithoutOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => OwnershipScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => OwnershipUpdateManyMutationInputObjectSchema),
      z.lazy(() => OwnershipUncheckedUpdateManyWithoutOwnershipsInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
