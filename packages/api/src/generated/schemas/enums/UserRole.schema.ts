import { z } from "zod"

export const UserRoleSchema = z.enum(["admin", "user"])
