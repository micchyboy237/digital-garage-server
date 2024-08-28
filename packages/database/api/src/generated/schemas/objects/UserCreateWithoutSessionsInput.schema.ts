import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { ProfileCreateNestedOneWithoutUserInputObjectSchema } from "./ProfileCreateNestedOneWithoutUserInput.schema"
import { SubscriptionCreateNestedOneWithoutUserInputObjectSchema } from "./SubscriptionCreateNestedOneWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    password: z.string().optional().nullable(),
    firebaseUid: z.string(),
    provider: z.lazy(() => AuthProviderSchema),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
    profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionCreateNestedOneWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutSessionsInputObjectSchema = Schema
