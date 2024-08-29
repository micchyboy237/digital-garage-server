import { z } from "zod"

export const VehicleScalarFieldEnumSchema = z.enum(["id", "make", "model", "registrationNumber", "ownerId"])
