import { z } from "zod"

export const PaymentIntervalSchema = z.enum(["monthly"])
