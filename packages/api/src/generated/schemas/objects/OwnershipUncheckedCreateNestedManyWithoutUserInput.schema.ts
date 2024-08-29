import { z } from "zod"
import { OwnershipCreateWithoutUserInputObjectSchema } from "./OwnershipCreateWithoutUserInput.schema"
import { OwnershipUncheckedCreateWithoutUserInputObjectSchema } from "./OwnershipUncheckedCreateWithoutUserInput.schema"
import { OwnershipCreateOrConnectWithoutUserInputObjectSchema } from "./OwnershipCreateOrConnectWithoutUserInput.schema"
import { OwnershipCreateManyUserInputEnvelopeObjectSchema } from "./OwnershipCreateManyUserInputEnvelope.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUncheckedCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OwnershipCreateWithoutUserInputObjectSchema),
        z.lazy(() => OwnershipCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => OwnershipUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => OwnershipUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OwnershipCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => OwnershipCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => OwnershipCreateManyUserInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => OwnershipWhereUniqueInputObjectSchema), z.lazy(() => OwnershipWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const OwnershipUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema
