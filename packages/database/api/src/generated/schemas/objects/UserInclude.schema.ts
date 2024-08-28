import { z } from "zod"
import { ProfileArgsObjectSchema } from "./ProfileArgs.schema"
import { SubscriptionArgsObjectSchema } from "./SubscriptionArgs.schema"
import { SessionFindManySchema } from "../findManySession.schema"
import { UserCountOutputTypeArgsObjectSchema } from "./UserCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
    subscription: z.union([z.boolean(), z.lazy(() => SubscriptionArgsObjectSchema)]).optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const UserIncludeObjectSchema = Schema
