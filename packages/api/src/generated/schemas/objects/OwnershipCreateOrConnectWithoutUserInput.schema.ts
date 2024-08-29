import { z } from "zod"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipCreateWithoutUserInputObjectSchema } from "./OwnershipCreateWithoutUserInput.schema"
import { OwnershipUncheckedCreateWithoutUserInputObjectSchema } from "./OwnershipUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => OwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OwnershipCreateWithoutUserInputObjectSchema),
      z.lazy(() => OwnershipUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipCreateOrConnectWithoutUserInputObjectSchema = Schema
