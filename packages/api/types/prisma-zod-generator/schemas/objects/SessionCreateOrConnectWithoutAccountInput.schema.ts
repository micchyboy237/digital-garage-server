import { z } from "zod"
import { SessionWhereUniqueInputObjectSchema } from "./SessionWhereUniqueInput.schema"
import { SessionCreateWithoutAccountInputObjectSchema } from "./SessionCreateWithoutAccountInput.schema"
import { SessionUncheckedCreateWithoutAccountInputObjectSchema } from "./SessionUncheckedCreateWithoutAccountInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateOrConnectWithoutAccountInput> = z
  .object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SessionCreateWithoutAccountInputObjectSchema),
      z.lazy(() => SessionUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict()

export const SessionCreateOrConnectWithoutAccountInputObjectSchema = Schema
