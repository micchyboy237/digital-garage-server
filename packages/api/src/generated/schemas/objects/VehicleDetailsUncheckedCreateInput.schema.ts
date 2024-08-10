import { z } from "zod"
import { VehicleUncheckedCreateNestedOneWithoutDetailsInputObjectSchema } from "./VehicleUncheckedCreateNestedOneWithoutDetailsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    registrationNumber: z.string(),
    taxStatus: z.string(),
    taxDueDate: z.coerce.date(),
    motStatus: z.string(),
    yearOfManufacture: z.number(),
    engineCapacity: z.number(),
    co2Emissions: z.number(),
    fuelType: z.string(),
    markedForExport: z.boolean(),
    colour: z.string(),
    typeApproval: z.string(),
    euroStatus: z.string(),
    dateOfLastV5CIssued: z.coerce.date(),
    motExpiryDate: z.coerce.date(),
    wheelplan: z.string(),
    monthOfFirstRegistration: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vehicle: z.lazy(() => VehicleUncheckedCreateNestedOneWithoutDetailsInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDetailsUncheckedCreateInputObjectSchema = Schema
