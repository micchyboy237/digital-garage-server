import { z } from "zod"
import { AuthCreateWithoutUserInputObjectSchema } from "./AuthCreateWithoutUserInput.schema"
import { AuthUncheckedCreateWithoutUserInputObjectSchema } from "./AuthUncheckedCreateWithoutUserInput.schema"
import { AuthCreateOrConnectWithoutUserInputObjectSchema } from "./AuthCreateOrConnectWithoutUserInput.schema"
import { AuthWhereUniqueInputObjectSchema } from "./AuthWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthCreateWithoutUserInputObjectSchema),
        z.lazy(() => AuthUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => AuthCreateOrConnectWithoutUserInputObjectSchema).optional(),
    connect: z.lazy(() => AuthWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AuthCreateNestedOneWithoutUserInputObjectSchema = Schema
