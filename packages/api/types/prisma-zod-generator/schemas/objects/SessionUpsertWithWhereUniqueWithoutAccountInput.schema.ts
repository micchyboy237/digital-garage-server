import { z } from "zod"
import { SessionWhereUniqueInputObjectSchema } from "./SessionWhereUniqueInput.schema"
import { SessionUpdateWithoutAccountInputObjectSchema } from "./SessionUpdateWithoutAccountInput.schema"
import { SessionUncheckedUpdateWithoutAccountInputObjectSchema } from "./SessionUncheckedUpdateWithoutAccountInput.schema"
import { SessionCreateWithoutAccountInputObjectSchema } from "./SessionCreateWithoutAccountInput.schema"
import { SessionUncheckedCreateWithoutAccountInputObjectSchema } from "./SessionUncheckedCreateWithoutAccountInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutAccountInput> = z
  .object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => SessionUpdateWithoutAccountInputObjectSchema),
      z.lazy(() => SessionUncheckedUpdateWithoutAccountInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SessionCreateWithoutAccountInputObjectSchema),
      z.lazy(() => SessionUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict()

export const SessionUpsertWithWhereUniqueWithoutAccountInputObjectSchema = Schema
