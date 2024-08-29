import { z } from "zod"
import { OwnershipCreateWithoutPostsInputObjectSchema } from "./OwnershipCreateWithoutPostsInput.schema"
import { OwnershipUncheckedCreateWithoutPostsInputObjectSchema } from "./OwnershipUncheckedCreateWithoutPostsInput.schema"
import { OwnershipCreateOrConnectWithoutPostsInputObjectSchema } from "./OwnershipCreateOrConnectWithoutPostsInput.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCreateNestedOneWithoutPostsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OwnershipCreateWithoutPostsInputObjectSchema),
        z.lazy(() => OwnershipUncheckedCreateWithoutPostsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => OwnershipCreateOrConnectWithoutPostsInputObjectSchema).optional(),
    connect: z.lazy(() => OwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipCreateNestedOneWithoutPostsInputObjectSchema = Schema
