import { z } from "zod"

export const TransferStatusSchema = z.enum(["REQUESTED", "ACCEPTED", "REJECTED"])
