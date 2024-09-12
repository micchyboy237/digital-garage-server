import { MaterialIcons } from "@expo/vector-icons"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Screen } from "app/components"
import GalleryRoute from "app/screens/digital-garage/screens/vehicle-details/GalleryRoute"
import OverviewRoute from "app/screens/digital-garage/screens/vehicle-details/OverviewRoute"
import { trpc } from "app/services/api"
import { spacing } from "app/theme"
import React from "react"
import { Image, TouchableOpacity, View, ViewStyle } from "react-native"

interface VehicleDetailsScreenProps {}

const Tab = createMaterialTopTabNavigator()

type VehicleDetailsRouteProp = RouteProp<
  { VehicleDetails: { ownershipId: string } },
  "VehicleDetails"
>

export const VehicleDetailsScreen: React.FC<VehicleDetailsScreenProps> = () => {
  const navigation = useNavigation()
  const route = useRoute<VehicleDetailsRouteProp>()
  const { ownershipId } = route.params

  const vehicleDetailsQuery = trpc.me.getVehicleDetails.useQuery({ ownershipId })

  const { vehicleDisplayPhoto } = vehicleDetailsQuery.data ?? {}

  console.log("DATA:", JSON.stringify(vehicleDetailsQuery.data, null, 2))

  return vehicleDetailsQuery.isPending ? null : (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <View
        style={{
          width: "100%",
          height: 170,
        }}
      >
        <Image
          style={{
            backgroundColor: "#cccccc",
            width: "100%",
            height: "100%",
          }}
          source={{ uri: vehicleDisplayPhoto?.url }}
        />
        {navigation.canGoBack() && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              position: "absolute",
              top: spacing.md,
              left: spacing.md,
              zIndex: 10,
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={navigation.goBack}
          >
            <MaterialIcons name="keyboard-arrow-left" size={34} color="white" />
          </TouchableOpacity>
        )}
      </View>

      <Tab.Navigator
        // set default props for all tabs
        screenOptions={{
          lazy: true,
          tabBarStyle: {
            backgroundColor: "#eeeeee",
          },
          tabBarLabelStyle: {
            textTransform: "none",
          },
        }}
      >
        <Tab.Screen name="Overview">{() => <OverviewRoute ownershipId={ownershipId} />}</Tab.Screen>
        <Tab.Screen name="Gallery">{() => <GalleryRoute ownershipId={ownershipId} />}</Tab.Screen>
        {/* <Tab.Screen name="History">
          {() => <HistoryRoute vehicleOwnership={vehicleOwnership} />}
        </Tab.Screen>
        <Tab.Screen name="Share">
          {() => <ShareRoute vehicleOwnership={vehicleOwnership} />}
        </Tab.Screen>
        <Tab.Screen name="Transfer">
          {() => <TransferRoute vehicleOwnership={vehicleOwnership} />}
        </Tab.Screen> */}
      </Tab.Navigator>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}
