import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"
import { MediaFileCreateWithoutOwnershipInputObjectSchema } from "./MediaFileCreateWithoutOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateOrConnectWithoutOwnershipInput> = z
  .object({
    where: z.lazy(() => MediaFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaFileCreateWithoutOwnershipInputObjectSchema),
      z.lazy(() => MediaFileUncheckedCreateWithoutOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const MediaFileCreateOrConnectWithoutOwnershipInputObjectSchema = Schema
