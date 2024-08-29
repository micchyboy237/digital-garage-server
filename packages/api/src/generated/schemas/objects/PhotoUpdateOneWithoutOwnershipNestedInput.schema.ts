import { z } from "zod"
import { PhotoCreateWithoutOwnershipInputObjectSchema } from "./PhotoCreateWithoutOwnershipInput.schema"
import { PhotoUncheckedCreateWithoutOwnershipInputObjectSchema } from "./PhotoUncheckedCreateWithoutOwnershipInput.schema"
import { PhotoCreateOrConnectWithoutOwnershipInputObjectSchema } from "./PhotoCreateOrConnectWithoutOwnershipInput.schema"
import { PhotoUpsertWithoutOwnershipInputObjectSchema } from "./PhotoUpsertWithoutOwnershipInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"
import { PhotoUpdateWithoutOwnershipInputObjectSchema } from "./PhotoUpdateWithoutOwnershipInput.schema"
import { PhotoUncheckedUpdateWithoutOwnershipInputObjectSchema } from "./PhotoUncheckedUpdateWithoutOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUpdateOneWithoutOwnershipNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PhotoCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => PhotoUncheckedCreateWithoutOwnershipInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => PhotoCreateOrConnectWithoutOwnershipInputObjectSchema).optional(),
    upsert: z.lazy(() => PhotoUpsertWithoutOwnershipInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => PhotoWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PhotoUpdateWithoutOwnershipInputObjectSchema),
        z.lazy(() => PhotoUncheckedUpdateWithoutOwnershipInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const PhotoUpdateOneWithoutOwnershipNestedInputObjectSchema = Schema
