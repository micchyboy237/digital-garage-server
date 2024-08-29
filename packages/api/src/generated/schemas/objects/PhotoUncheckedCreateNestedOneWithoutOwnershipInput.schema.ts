import { z } from "zod"
import { PhotoCreateWithoutOwnershipInputObjectSchema } from "./PhotoCreateWithoutOwnershipInput.schema"
import { PhotoUncheckedCreateWithoutOwnershipInputObjectSchema } from "./PhotoUncheckedCreateWithoutOwnershipInput.schema"
import { PhotoCreateOrConnectWithoutOwnershipInputObjectSchema } from "./PhotoCreateOrConnectWithoutOwnershipInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUncheckedCreateNestedOneWithoutOwnershipInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PhotoCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => PhotoUncheckedCreateWithoutOwnershipInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => PhotoCreateOrConnectWithoutOwnershipInputObjectSchema).optional(),
    connect: z.lazy(() => PhotoWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const PhotoUncheckedCreateNestedOneWithoutOwnershipInputObjectSchema = Schema
