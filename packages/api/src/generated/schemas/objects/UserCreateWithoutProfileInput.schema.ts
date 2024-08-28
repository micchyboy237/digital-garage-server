import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { SubscriptionCreateNestedOneWithoutUserInputObjectSchema } from "./SubscriptionCreateNestedOneWithoutUserInput.schema"
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateWithoutProfileInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    firebaseUid: z.string(),
    isEmailVerified: z.boolean().optional(),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
    subscription: z.lazy(() => SubscriptionCreateNestedOneWithoutUserInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutProfileInputObjectSchema = Schema
