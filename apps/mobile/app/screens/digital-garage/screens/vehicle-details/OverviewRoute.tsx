import { trpc } from "app/services/api"
import { spacing } from "app/theme"
import React from "react"
import { ScrollView, Text, View } from "react-native"

interface OverviewRouteProps {
  ownershipId: string
}

const OverviewRoute: React.FC<OverviewRouteProps> = ({ ownershipId }) => {
  const vehicleDetailsQuery = trpc.me.getVehicleDetails.useQuery({ ownershipId })

  const { vehicleDetails, vehicleDisplayPhoto, vehicleOwnership } = vehicleDetailsQuery.data ?? {}

  return (
    <ScrollView>
      <View>
        {!!vehicleOwnership?.overview && (
          <>
            <Text>{vehicleOwnership.overview}</Text>
          </>
        )}
        {/* <View>
        {!!description && <Text>Description: {description}</Text>}
        {!!startDate && <Text>Start Date: {startDate.toDateString()}</Text>}
        {!!endDate && <Text>End Date: {endDate.toDateString()}</Text>}
        <Text>Current Owner: {isCurrentOwner ? "Yes" : "No"}</Text>
        <Text>Temporary Owner: {isTemporaryOwner ? "Yes" : "No"}</Text>
        <Text>Can Edit Documents: {canEditDocuments ? "Yes" : "No"}</Text>
      </View> */}

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: spacing.md }}>Technical</Text>
        <View>
          <Text>Make: {vehicleDetails.make}</Text>
          <Text>Model: {vehicleDetails.model}</Text>
          <Text>Registration Number: {vehicleDetails.registrationNumber}</Text>
          {/* <Text>Tax Status: {vehicleDetails.taxStatus}</Text> */}
          {/* <Text>Tax Due Date: {vehicleDetails.taxDueDate.toDateString()}</Text> */}
          {/* <Text>MOT Status: {vehicleDetails.motStatus}</Text> */}
          <Text>Year of Manufacture: {vehicleDetails.yearOfManufacture}</Text>
          <Text>Engine Capacity: {vehicleDetails.engineCapacity} cc</Text>
          <Text>CO2 Emissions: {vehicleDetails.co2Emissions} g/km</Text>
          <Text>Fuel Type: {vehicleDetails.fuelType}</Text>
          {/* <Text>Marked for Export: {vehicleDetails.markedForExport ? "Yes" : "No"}</Text> */}
          <Text>Colour: {vehicleDetails.colour}</Text>
          {/* <Text>Type Approval: {vehicleDetails.typeApproval}</Text> */}
          {/* <Text>Euro Status: {vehicleDetails.euroStatus}</Text> */}
          {/* <Text>Date of Last V5C Issued: {vehicleDetails.dateOfLastV5CIssued.toDateString()}</Text>
        <Text>MOT Expiry Date: {vehicleDetails.motExpiryDate.toDateString()}</Text>
        <Text>Wheelplan: {vehicleDetails.wheelplan}</Text>
        <Text>Month of First Registration: {vehicleDetails.monthOfFirstRegistration.toDateString()}</Text> */}
        </View>

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: spacing.md }}>MOT</Text>
        <View>
          <Text>MOT Status: {vehicleDetails.motStatus}</Text>
          <Text>MOT Expiry Date: {vehicleDetails.motExpiryDate?.toDateString()}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default OverviewRoute
