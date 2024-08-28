import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./ProfileUncheckedCreateNestedOneWithoutUserInput.schema"
import { SubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./SubscriptionUncheckedCreateNestedOneWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    password: z.string().optional().nullable(),
    firebaseUid: z.string(),
    provider: z.lazy(() => AuthProviderSchema),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
    profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutSessionsInputObjectSchema = Schema
