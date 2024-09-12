import * as z from "zod"
import { CompleteVehicleOwnership, RelatedVehicleOwnershipModel } from "./index"

export const VehicleDetailsModel = z.object({
  id: z.string(),
  fromApi: z.boolean(),
  registrationNumber: z.string(),
  make: z.string(),
  model: z.string(),
  yearOfManufacture: z.number().int(),
  engineCapacity: z.number().int(),
  fuelType: z.string(),
  colour: z.string(),
  taxStatus: z.string().nullish(),
  taxDueDate: z.date().nullish(),
  motStatus: z.string().nullish(),
  motExpiryDate: z.date().nullish(),
  co2Emissions: z.number().int().nullish(),
  markedForExport: z.boolean().nullish(),
  typeApproval: z.string().nullish(),
  wheelplan: z.string().nullish(),
  artEndDate: z.date().nullish(),
  monthOfFirstRegistration: z.date().nullish(),
  euroStatus: z.string().nullish(),
  dateOfLastV5CIssued: z.date().nullish(),
  realDrivingEmissions: z.string().nullish(),
  revenueWeight: z.number().int().nullish(),
  ownershipId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteVehicleDetails extends z.infer<typeof VehicleDetailsModel> {
  ownership?: CompleteVehicleOwnership | null
}

/**
 * RelatedVehicleDetailsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVehicleDetailsModel: z.ZodSchema<CompleteVehicleDetails> = z.lazy(() => VehicleDetailsModel.extend({
  ownership: RelatedVehicleOwnershipModel.nullish(),
}))
