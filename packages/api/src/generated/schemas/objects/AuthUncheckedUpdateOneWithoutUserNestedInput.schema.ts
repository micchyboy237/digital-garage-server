import { z } from "zod"
import { AuthCreateWithoutUserInputObjectSchema } from "./AuthCreateWithoutUserInput.schema"
import { AuthUncheckedCreateWithoutUserInputObjectSchema } from "./AuthUncheckedCreateWithoutUserInput.schema"
import { AuthCreateOrConnectWithoutUserInputObjectSchema } from "./AuthCreateOrConnectWithoutUserInput.schema"
import { AuthUpsertWithoutUserInputObjectSchema } from "./AuthUpsertWithoutUserInput.schema"
import { AuthWhereUniqueInputObjectSchema } from "./AuthWhereUniqueInput.schema"
import { AuthUpdateWithoutUserInputObjectSchema } from "./AuthUpdateWithoutUserInput.schema"
import { AuthUncheckedUpdateWithoutUserInputObjectSchema } from "./AuthUncheckedUpdateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthUncheckedUpdateOneWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthCreateWithoutUserInputObjectSchema),
        z.lazy(() => AuthUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => AuthCreateOrConnectWithoutUserInputObjectSchema).optional(),
    upsert: z.lazy(() => AuthUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AuthWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AuthUpdateWithoutUserInputObjectSchema),
        z.lazy(() => AuthUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AuthUncheckedUpdateOneWithoutUserNestedInputObjectSchema = Schema
