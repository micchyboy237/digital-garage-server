import { z } from "zod"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipUpdateWithoutUserInputObjectSchema } from "./OwnershipUpdateWithoutUserInput.schema"
import { OwnershipUncheckedUpdateWithoutUserInputObjectSchema } from "./OwnershipUncheckedUpdateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => OwnershipWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => OwnershipUpdateWithoutUserInputObjectSchema),
      z.lazy(() => OwnershipUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
