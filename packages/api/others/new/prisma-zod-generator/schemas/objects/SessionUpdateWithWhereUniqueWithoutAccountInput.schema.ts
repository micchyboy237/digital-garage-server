import { z } from "zod"
import { SessionWhereUniqueInputObjectSchema } from "./SessionWhereUniqueInput.schema"
import { SessionUpdateWithoutAccountInputObjectSchema } from "./SessionUpdateWithoutAccountInput.schema"
import { SessionUncheckedUpdateWithoutAccountInputObjectSchema } from "./SessionUncheckedUpdateWithoutAccountInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutAccountInput> = z
  .object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SessionUpdateWithoutAccountInputObjectSchema),
      z.lazy(() => SessionUncheckedUpdateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict()

export const SessionUpdateWithWhereUniqueWithoutAccountInputObjectSchema = Schema
