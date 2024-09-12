import { z } from "zod"
import { SessionCreateWithoutAccountInputObjectSchema } from "./SessionCreateWithoutAccountInput.schema"
import { SessionUncheckedCreateWithoutAccountInputObjectSchema } from "./SessionUncheckedCreateWithoutAccountInput.schema"
import { SessionCreateOrConnectWithoutAccountInputObjectSchema } from "./SessionCreateOrConnectWithoutAccountInput.schema"
import { SessionCreateManyAccountInputEnvelopeObjectSchema } from "./SessionCreateManyAccountInputEnvelope.schema"
import { SessionWhereUniqueInputObjectSchema } from "./SessionWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateNestedManyWithoutAccountInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutAccountInputObjectSchema),
        z.lazy(() => SessionCreateWithoutAccountInputObjectSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutAccountInputObjectSchema),
        z.lazy(() => SessionUncheckedCreateWithoutAccountInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutAccountInputObjectSchema),
        z.lazy(() => SessionCreateOrConnectWithoutAccountInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => SessionCreateManyAccountInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const SessionCreateNestedManyWithoutAccountInputObjectSchema = Schema
