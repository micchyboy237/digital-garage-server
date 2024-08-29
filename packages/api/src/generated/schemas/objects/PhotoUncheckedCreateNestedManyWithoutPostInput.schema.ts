import { z } from "zod"
import { PhotoCreateWithoutPostInputObjectSchema } from "./PhotoCreateWithoutPostInput.schema"
import { PhotoUncheckedCreateWithoutPostInputObjectSchema } from "./PhotoUncheckedCreateWithoutPostInput.schema"
import { PhotoCreateOrConnectWithoutPostInputObjectSchema } from "./PhotoCreateOrConnectWithoutPostInput.schema"
import { PhotoCreateManyPostInputEnvelopeObjectSchema } from "./PhotoCreateManyPostInputEnvelope.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUncheckedCreateNestedManyWithoutPostInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PhotoCreateWithoutPostInputObjectSchema),
        z.lazy(() => PhotoCreateWithoutPostInputObjectSchema).array(),
        z.lazy(() => PhotoUncheckedCreateWithoutPostInputObjectSchema),
        z.lazy(() => PhotoUncheckedCreateWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PhotoCreateOrConnectWithoutPostInputObjectSchema),
        z.lazy(() => PhotoCreateOrConnectWithoutPostInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => PhotoCreateManyPostInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => PhotoWhereUniqueInputObjectSchema), z.lazy(() => PhotoWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const PhotoUncheckedCreateNestedManyWithoutPostInputObjectSchema = Schema
