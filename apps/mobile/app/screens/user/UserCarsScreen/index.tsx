import { Ionicons } from "@expo/vector-icons"
import { useNetInfo } from "@react-native-community/netinfo"
import { useNavigation } from "@react-navigation/native"
import { AutoImage, Screen, Text } from "app/components"
import { AspectRatioImage } from "app/components/image/AspectRatioImage"
import { Loading } from "app/components/Loading"
import { useProfile } from "app/models/hooks/useProfile"
import { useUser } from "app/models/hooks/useUser"
import { generateUUID } from "app/screens/auth/utils"
import { mockUser } from "app/screens/digital-garage/data/mock"
import { AddVehicleModal } from "app/screens/digital-garage/screens/dashboard/AddVehicleModal"
import { useVehicleOwnerships } from "app/screens/user/UserCarsScreen/useVehicleOwnerships"
import { spacing } from "app/theme"
import { MediaFile, Vehicle, VehicleDetails, VehicleOwnership } from "app/types"
import React, { useEffect, useMemo, useState } from "react"
import { SectionList, StyleSheet, TouchableOpacity, View } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Car } from "../MyCarsScreen/Car"

const logoWithText = require("../../../../assets/app-icons/classic-garage.png")

export function UserCarsScreen() {
  const { currentOwnerships, pastOwnerships } = useVehicleOwnerships()
  console.log("Current Ownerships:", currentOwnerships)
  console.log("Past Ownerships:", pastOwnerships)
  const data = useMemo(() => {
    return [
      {
        title: "Current Vehicles",
        data: currentOwnerships,
      },
      {
        title: "Past Vehicles",
        data: pastOwnerships,
      },
    ]
  }, [currentOwnerships, pastOwnerships])

  const [cars, setCars] = useState<VehicleOwnership[]>([])
  const [loading, setLoading] = useState(true)
  const [isAddingVehicle, setIsAddingVehicle] = useState(false)

  const user = useUser()
  const navigation = useNavigation()
  const netInfo = useNetInfo()
  const profile = useProfile()
  const vehicleCount = cars.length

  const handleVehiclePress = (vehicleOwnership: VehicleOwnership) => {
    navigation.navigate("VehicleDetails", { vehicleOwnership })
  }

  const handleAddVehicle = async (
    make: string,
    model: string,
    details: Partial<VehicleDetails>,
    displayPicture?: MediaFile,
  ) => {
    const newVehicleId = await generateUUID()
    const newVehicle = {
      id: newVehicleId,
      make,
      model,
      registrationNumber: details.registrationNumber,
      details,
      ownershipHistory: [],
      documents: [],
      events: [],
    } as Vehicle

    const newVehicleOwnershipId = await generateUUID()
    const newVehicleOwnership = {
      id: newVehicleOwnershipId,
      userId: user?.id,
      vehicleId: newVehicle.id,
      displayPicture,
      isCurrentOwner: true,
      isTemporaryOwner: false,
      canEditDocuments: true,
      user,
      vehicle: newVehicle,
      events: [],
    } as VehicleOwnership

    console.log("New Vehicle: ", JSON.stringify(newVehicleOwnership, null, 2))

    setCars([...cars, newVehicleOwnership])
  }

  async function fetchCars() {
    try {
      setLoading(true)
      const response = mockUser.vehicleOwnerships // Updated to use mock data
      setCars(response)
    } catch (error) {
      console.log("fetchCars error: " + error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

  useEffect(() => {
    if (netInfo.isConnected === true) {
      // Handle online synchronization if needed
    }
  }, [netInfo.isConnected])

  const insets = useSafeAreaInsets()

  return (
    <>
      <Screen preset="fixed">
        <View style={[styles.header, { paddingTop: insets.top + spacing.md }]}>
          <View style={styles.headerContent}>
            <AspectRatioImage source={logoWithText} width={100} />
            <View style={styles.headerContentRight}>
              <TouchableOpacity onPress={() => setIsAddingVehicle(true)}>
                <Ionicons name="add-circle-outline" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
                <Ionicons name="notifications-outline" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Ionicons name="settings-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <RectButton
          onPress={() => navigation.navigate("UserProfile")}
          style={styles.profileContainer}
        >
          <AutoImage
            style={styles.profilePicture}
            source={{
              uri: profile?.displayPicture?.thumbnailUrl,
            }}
          />
          <View style={styles.profileDetails}>
            <Text weight="semiBold" style={styles.fullName}>
              {profile?.firstName} {profile?.lastName}
            </Text>
            <Text style={styles.vehicleCount}>Vehicles: {vehicleCount}</Text>
          </View>
          <View style={styles.userProfileIcon}>
            <Ionicons name="person-circle-outline" size={30} color="black" />
          </View>
        </RectButton>

        {loading ? (
          <Loading />
        ) : (
          // <FlatList
          //   data={cars}
          //   keyExtractor={(item) => item.id}
          //   renderItem={({ item }) => <Car data={item} onPress={() => handleVehiclePress(item)} />}
          //   contentContainerStyle={styles.carList}
          //   showsVerticalScrollIndicator={false}
          // />
          <SectionList
            sections={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Car data={item} onPress={() => handleVehiclePress(item)} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeaderTitle}>{title}</Text>
            )}
            contentContainerStyle={styles.carList}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Screen>
      <AddVehicleModal
        visible={isAddingVehicle}
        user={user}
        onAddVehicle={handleAddVehicle}
        onClose={() => setIsAddingVehicle(false)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContentRight: {
    flexDirection: "row",
    gap: spacing.md,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: "#f8f8f8",
    marginBottom: spacing.md,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: spacing.md,
  },
  profileDetails: {
    flex: 1,
    flexDirection: "column",
  },
  fullName: {
    fontSize: 18,
    marginBottom: spacing.xs,
  },
  vehicleCount: {
    fontSize: 14,
    color: "gray",
  },
  userProfileIcon: {
    marginLeft: spacing.md,
  },
  carList: {
    padding: spacing.md,
  },
  sectionHeaderTitle: {
    fontSize: 18,
    marginBottom: spacing.md,
  },
})
