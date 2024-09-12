import { z } from "zod"
import { MediaFileCreateWithoutOwnershipInputObjectSchema } from "./MediaFileCreateWithoutOwnershipInput.schema"
import { MediaFileUncheckedCreateWithoutOwnershipInputObjectSchema } from "./MediaFileUncheckedCreateWithoutOwnershipInput.schema"
import { MediaFileCreateOrConnectWithoutOwnershipInputObjectSchema } from "./MediaFileCreateOrConnectWithoutOwnershipInput.schema"
import { MediaFileCreateManyOwnershipInputEnvelopeObjectSchema } from "./MediaFileCreateManyOwnershipInputEnvelope.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./MediaFileWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUncheckedCreateNestedManyWithoutOwnershipInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MediaFileCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => MediaFileCreateWithoutOwnershipInputObjectSchema).array(),
        z.lazy(() => MediaFileUncheckedCreateWithoutOwnershipInputObjectSchema),
        z.lazy(() => MediaFileUncheckedCreateWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MediaFileCreateOrConnectWithoutOwnershipInputObjectSchema),
        z.lazy(() => MediaFileCreateOrConnectWithoutOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => MediaFileCreateManyOwnershipInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => MediaFileWhereUniqueInputObjectSchema), z.lazy(() => MediaFileWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const MediaFileUncheckedCreateNestedManyWithoutOwnershipInputObjectSchema = Schema
