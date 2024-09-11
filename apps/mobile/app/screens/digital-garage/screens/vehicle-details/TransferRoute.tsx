import { useNavigation } from "@react-navigation/native"
import { Toggle } from "app/components"
import { mock2ndUser, mockUser } from "app/screens/digital-garage/data/mock"
import { EventType, VehicleEvent, VehicleOwnership } from "app/types"
import React, { useState } from "react"
import { Button, Image, ScrollView, Text, TextInput, View } from "react-native"

interface TransferRouteProps {
  vehicleOwnership: VehicleOwnership
}

const TransferRoute: React.FC<TransferRouteProps> = ({ vehicleOwnership }) => {
  const [email, setEmail] = useState<string>("jane.smith@example.com")
  const [transferGallery, setTransferGallery] = useState<boolean>(true)
  const [transferInvoices, setTransferInvoices] = useState<boolean>(true)
  const [transferReminders, setTransferReminders] = useState<boolean>(true)
  const [transferDocuments, setTransferDocuments] = useState<boolean>(true)
  const { vehicle } = vehicleOwnership
  const { ownershipHistory } = vehicle

  const navigation = useNavigation()

  const handleSearch = () => {
    // Mock searching for the new user by email
    if (email === "jane.smith@example.com") {
      alert(`User found: ${mock2ndUser.firstName} ${mock2ndUser.lastName}`)
    } else {
      alert("User not found")
    }
  }

  const handleTransfer = () => {
    if (email === "jane.smith@example.com") {
      const galleryEvents: VehicleEvent[] = vehicleOwnership.events.filter(
        (event) => event.type === EventType.post,
      )
      const invoiceEvents: VehicleEvent[] = vehicleOwnership.events.filter(
        (event) => event.type === EventType.invoice,
      )
      const reminderEvents: VehicleEvent[] = vehicleOwnership.events.filter(
        (event) => event.type === EventType.reminder,
      )
      const documentEvents: VehicleEvent[] = vehicleOwnership.events.filter(
        (event) => event.type === EventType.document,
      )

      let transferredEvents = [] as VehicleEvent[]
      if (transferGallery) {
        transferredEvents = transferredEvents.concat(galleryEvents)
      }
      if (transferInvoices) {
        transferredEvents = transferredEvents.concat(invoiceEvents)
      }
      if (transferReminders) {
        transferredEvents = transferredEvents.concat(reminderEvents)
      }
      if (transferDocuments) {
        transferredEvents = transferredEvents.concat(documentEvents)
      }

      // Create new ownership entry for the new owner
      const newOwnership: VehicleOwnership = {
        id: `vehicle-ownership-${Date.now()}`,
        userId: mock2ndUser.id,
        vehicleId: vehicle.id,
        displayPicture: vehicleOwnership.displayPicture,
        startDate: new Date(),
        endDate: undefined,
        isCurrentOwner: true,
        isTemporaryOwner: false,
        canEditDocuments: true,
        user: mock2ndUser,
        vehicle,
        events: transferredEvents,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      const newUserOwnershipHistory = mock2ndUser.vehicleOwnerships
      // Add the new ownership to the history
      newUserOwnershipHistory.push(newOwnership)

      // Update current ownership to mark it as not current
      const currentUserOwnershipHistory = ownershipHistory.map((ownership) => {
        if (ownership.isCurrentOwner) {
          return {
            ...ownership,
            isCurrentOwner: false,
            endDate: new Date(),
          }
        }
        return ownership
      })

      // Set mockUser's vehicle ownership isCurrentOwner to false
      mockUser.vehicleOwnerships = mockUser.vehicleOwnerships.map((ownership) => {
        if (ownership.vehicleId === vehicle.id) {
          return {
            ...ownership,
            isCurrentOwner: false,
            endDate: new Date(),
          }
        }
        return ownership
      })

      // Update the vehicle's ownership history
      vehicle.ownershipHistory = currentUserOwnershipHistory

      // Log the updated ownership history for demonstration
      console.log("Updated Ownership History:", currentUserOwnershipHistory)

      alert("Vehicle transferred successfully")
      navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard" }],
      })
    } else {
      alert("Please search for and select a new owner first")
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 20,
      }}
    >
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        <Text>Enter the email address of the person you want to transfer the vehicle to:</Text>
        <TextInput
          placeholder="Email address"
          style={{ borderWidth: 1, marginBottom: 10 }}
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Search" onPress={handleSearch} />
        {email === "jane.smith@example.com" && (
          <View>
            <Text>New Owner:</Text>
            <Text>
              Name: {mock2ndUser.firstName} {mock2ndUser.lastName}
            </Text>
            <Image
              source={{ uri: mock2ndUser.profilePicture?.url || "" }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
        )}
      </View>

      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          Data Items to Share
        </Text>

        <View style={{ gap: 20, paddingVertical: 10 }}>
          <View>
            <Text>Gallery</Text>
            <View
              style={{
                marginTop: 10,
                gap: 10,
              }}
            >
              <Toggle
                variant="switch"
                label="Transfer Gallery"
                value={transferGallery}
                onValueChange={setTransferGallery}
              />
            </View>
          </View>

          <View>
            <Text>History</Text>
            <View
              style={{
                marginTop: 10,
                gap: 10,
              }}
            >
              <Toggle
                variant="switch"
                label="Transfer Reminders"
                value={transferReminders}
                onValueChange={setTransferReminders}
              />
              <Toggle
                variant="switch"
                label="Transfer Invoices"
                value={transferInvoices}
                onValueChange={setTransferInvoices}
              />
              <Toggle
                variant="switch"
                label="Transfer Documents"
                value={transferDocuments}
                onValueChange={setTransferDocuments}
              />
            </View>
          </View>
        </View>
        <Button title="Transfer" onPress={handleTransfer} />
      </View>
    </ScrollView>
  )
}

export default TransferRoute
