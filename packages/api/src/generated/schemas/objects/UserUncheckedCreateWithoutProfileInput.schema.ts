import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { SubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./SubscriptionUncheckedCreateNestedOneWithoutUserInput.schema"
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutProfileInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    firebaseUid: z.string(),
    isEmailVerified: z.boolean().optional(),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
    subscription: z.lazy(() => SubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutProfileInputObjectSchema = Schema
