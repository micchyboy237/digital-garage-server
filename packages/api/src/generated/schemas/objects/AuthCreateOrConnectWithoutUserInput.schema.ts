import { z } from "zod"
import { AuthWhereUniqueInputObjectSchema } from "./AuthWhereUniqueInput.schema"
import { AuthCreateWithoutUserInputObjectSchema } from "./AuthCreateWithoutUserInput.schema"
import { AuthUncheckedCreateWithoutUserInputObjectSchema } from "./AuthUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => AuthWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AuthCreateWithoutUserInputObjectSchema),
      z.lazy(() => AuthUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const AuthCreateOrConnectWithoutUserInputObjectSchema = Schema
