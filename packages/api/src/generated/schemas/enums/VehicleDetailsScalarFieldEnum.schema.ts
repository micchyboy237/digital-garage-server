import { z } from "zod"

export const VehicleDetailsScalarFieldEnumSchema = z.enum([
  "id",
  "registrationNumber",
  "taxStatus",
  "taxDueDate",
  "motStatus",
  "yearOfManufacture",
  "engineCapacity",
  "co2Emissions",
  "fuelType",
  "markedForExport",
  "colour",
  "typeApproval",
  "euroStatus",
  "dateOfLastV5CIssued",
  "motExpiryDate",
  "wheelplan",
  "monthOfFirstRegistration",
  "createdAt",
  "updatedAt",
])
