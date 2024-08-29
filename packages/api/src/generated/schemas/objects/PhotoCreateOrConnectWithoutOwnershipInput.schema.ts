import { z } from "zod"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"
import { PhotoCreateWithoutOwnershipInputObjectSchema } from "./PhotoCreateWithoutOwnershipInput.schema"
import { PhotoUncheckedCreateWithoutOwnershipInputObjectSchema } from "./PhotoUncheckedCreateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoCreateOrConnectWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutOwnershipInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoCreateOrConnectWithoutOwnershipInputObjectSchema = Schema
