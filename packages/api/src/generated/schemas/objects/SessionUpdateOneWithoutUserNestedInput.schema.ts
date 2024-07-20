import { z } from "zod"
import { SessionCreateWithoutUserInputObjectSchema } from "./SessionCreateWithoutUserInput.schema"
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from "./SessionUncheckedCreateWithoutUserInput.schema"
import { SessionCreateOrConnectWithoutUserInputObjectSchema } from "./SessionCreateOrConnectWithoutUserInput.schema"
import { SessionUpsertWithoutUserInputObjectSchema } from "./SessionUpsertWithoutUserInput.schema"
import { SessionWhereUniqueInputObjectSchema } from "./SessionWhereUniqueInput.schema"
import { SessionUpdateWithoutUserInputObjectSchema } from "./SessionUpdateWithoutUserInput.schema"
import { SessionUncheckedUpdateWithoutUserInputObjectSchema } from "./SessionUncheckedUpdateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionUpdateOneWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).optional(),
    upsert: z.lazy(() => SessionUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => SessionWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => SessionUpdateWithoutUserInputObjectSchema),
        z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const SessionUpdateOneWithoutUserNestedInputObjectSchema = Schema
