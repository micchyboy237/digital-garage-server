import { z } from "zod"
import { ProfileArgsObjectSchema } from "./ProfileArgs.schema"
import { SubscriptionArgsObjectSchema } from "./SubscriptionArgs.schema"
import { SessionFindManySchema } from "../findManySession.schema"
import { UserCountOutputTypeArgsObjectSchema } from "./UserCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firebaseUid: z.boolean().optional(),
    isEmailVerified: z.boolean().optional(),
    profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
    subscription: z.union([z.boolean(), z.lazy(() => SubscriptionArgsObjectSchema)]).optional(),
    accountStatus: z.boolean().optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const UserSelectObjectSchema = Schema
