import { z } from "zod"

export const AccountStatusSchema = z.enum(["ONBOARDING", "SELECT_SUBSCRIPTION", "ACTIVE"])
