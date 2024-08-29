import { z } from "zod"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipUpdateWithoutUserInputObjectSchema } from "./OwnershipUpdateWithoutUserInput.schema"
import { OwnershipUncheckedUpdateWithoutUserInputObjectSchema } from "./OwnershipUncheckedUpdateWithoutUserInput.schema"
import { OwnershipCreateWithoutUserInputObjectSchema } from "./OwnershipCreateWithoutUserInput.schema"
import { OwnershipUncheckedCreateWithoutUserInputObjectSchema } from "./OwnershipUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => OwnershipWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => OwnershipUpdateWithoutUserInputObjectSchema),
      z.lazy(() => OwnershipUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OwnershipCreateWithoutUserInputObjectSchema),
      z.lazy(() => OwnershipUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
