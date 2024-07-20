import { z } from "zod"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsSelect> = z
  .object({
    id: z.boolean().optional(),
    registrationNumber: z.boolean().optional(),
    taxStatus: z.boolean().optional(),
    taxDueDate: z.boolean().optional(),
    motStatus: z.boolean().optional(),
    yearOfManufacture: z.boolean().optional(),
    engineCapacity: z.boolean().optional(),
    co2Emissions: z.boolean().optional(),
    fuelType: z.boolean().optional(),
    markedForExport: z.boolean().optional(),
    colour: z.boolean().optional(),
    typeApproval: z.boolean().optional(),
    euroStatus: z.boolean().optional(),
    dateOfLastV5CIssued: z.boolean().optional(),
    motExpiryDate: z.boolean().optional(),
    wheelplan: z.boolean().optional(),
    monthOfFirstRegistration: z.boolean().optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const VehicleDetailsSelectObjectSchema = Schema
