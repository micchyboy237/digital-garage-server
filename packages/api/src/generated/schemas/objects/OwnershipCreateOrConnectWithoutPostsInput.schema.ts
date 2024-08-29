import { z } from "zod"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipCreateWithoutPostsInputObjectSchema } from "./OwnershipCreateWithoutPostsInput.schema"
import { OwnershipUncheckedCreateWithoutPostsInputObjectSchema } from "./OwnershipUncheckedCreateWithoutPostsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateOrConnectWithoutPostsInput> = z
  .object({
    where: z.lazy(() => OwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OwnershipCreateWithoutPostsInputObjectSchema),
      z.lazy(() => OwnershipUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict()

export const OwnershipCreateOrConnectWithoutPostsInputObjectSchema = Schema
