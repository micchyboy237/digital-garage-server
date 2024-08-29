import { z } from "zod"
import { OwnershipCreateWithoutPostsInputObjectSchema } from "./OwnershipCreateWithoutPostsInput.schema"
import { OwnershipUncheckedCreateWithoutPostsInputObjectSchema } from "./OwnershipUncheckedCreateWithoutPostsInput.schema"
import { OwnershipCreateOrConnectWithoutPostsInputObjectSchema } from "./OwnershipCreateOrConnectWithoutPostsInput.schema"
import { OwnershipUpsertWithoutPostsInputObjectSchema } from "./OwnershipUpsertWithoutPostsInput.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipUpdateWithoutPostsInputObjectSchema } from "./OwnershipUpdateWithoutPostsInput.schema"
import { OwnershipUncheckedUpdateWithoutPostsInputObjectSchema } from "./OwnershipUncheckedUpdateWithoutPostsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUpdateOneWithoutPostsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OwnershipCreateWithoutPostsInputObjectSchema),
        z.lazy(() => OwnershipUncheckedCreateWithoutPostsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => OwnershipCreateOrConnectWithoutPostsInputObjectSchema).optional(),
    upsert: z.lazy(() => OwnershipUpsertWithoutPostsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => OwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => OwnershipUpdateWithoutPostsInputObjectSchema),
        z.lazy(() => OwnershipUncheckedUpdateWithoutPostsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const OwnershipUpdateOneWithoutPostsNestedInputObjectSchema = Schema
