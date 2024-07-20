import { z } from "zod"
import { SessionCreateWithoutUserInputObjectSchema } from "./SessionCreateWithoutUserInput.schema"
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from "./SessionUncheckedCreateWithoutUserInput.schema"
import { SessionCreateOrConnectWithoutUserInputObjectSchema } from "./SessionCreateOrConnectWithoutUserInput.schema"
import { SessionWhereUniqueInputObjectSchema } from "./SessionWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionUncheckedCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).optional(),
    connect: z.lazy(() => SessionWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const SessionUncheckedCreateNestedOneWithoutUserInputObjectSchema = Schema
