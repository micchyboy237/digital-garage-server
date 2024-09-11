import { z } from "zod"
import { VehicleOwnershipArgsObjectSchema } from "./VehicleOwnershipArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsSelect> = z
  .object({
    id: z.boolean().optional(),
    fromApi: z.boolean().optional(),
    registrationNumber: z.boolean().optional(),
    make: z.boolean().optional(),
    model: z.boolean().optional(),
    yearOfManufacture: z.boolean().optional(),
    engineCapacity: z.boolean().optional(),
    fuelType: z.boolean().optional(),
    colour: z.boolean().optional(),
    taxStatus: z.boolean().optional(),
    taxDueDate: z.boolean().optional(),
    motStatus: z.boolean().optional(),
    motExpiryDate: z.boolean().optional(),
    co2Emissions: z.boolean().optional(),
    markedForExport: z.boolean().optional(),
    typeApproval: z.boolean().optional(),
    wheelplan: z.boolean().optional(),
    artEndDate: z.boolean().optional(),
    monthOfFirstRegistration: z.boolean().optional(),
    euroStatus: z.boolean().optional(),
    dateOfLastV5CIssued: z.boolean().optional(),
    realDrivingEmissions: z.boolean().optional(),
    revenueWeight: z.boolean().optional(),
    ownershipId: z.boolean().optional(),
    ownership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const VehicleDetailsSelectObjectSchema = Schema
