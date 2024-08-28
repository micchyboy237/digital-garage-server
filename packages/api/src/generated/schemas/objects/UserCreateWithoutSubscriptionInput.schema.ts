import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { ProfileCreateNestedOneWithoutUserInputObjectSchema } from "./ProfileCreateNestedOneWithoutUserInput.schema"
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateWithoutSubscriptionInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    firebaseUid: z.string(),
    isEmailVerified: z.boolean().optional(),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
    profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutSubscriptionInputObjectSchema = Schema
