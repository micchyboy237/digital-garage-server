import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./ProfileUncheckedCreateNestedOneWithoutUserInput.schema"
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSubscriptionInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    firebaseUid: z.string(),
    isEmailVerified: z.boolean().optional(),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
    profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutSubscriptionInputObjectSchema = Schema
