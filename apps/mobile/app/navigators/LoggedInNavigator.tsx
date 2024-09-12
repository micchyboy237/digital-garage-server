import { NavigatorScreenParams } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { useGetInitialLoggedInRoute } from "app/models/hooks/useGetInitialLoggedInRoute"
import { UserNavigator, UserTabParamList } from "app/navigators/UserNavigator"
import { DashboardScreen, VehicleDetailsScreen, WelcomeScreen } from "app/screens"
import { useLoggedInBootstrap } from "app/screens/digital-garage/hooks/useLoggedInBootstrap"
import { AddVehicleForm } from "app/screens/digital-garage/screens/dashboard/vehicle-form/AddVehicleForm"
import { VehicleGalleryForm } from "app/screens/digital-garage/screens/vehicle-details/vehicle-gallery-form/VehicleGalleryForm"
import { OnboardingScreen } from "app/screens/OnboardingScreen"
import { SubscriptionSuccessScreen } from "app/screens/subscription/SubscriptionSuccessScreen"
import { SubscriptionScreen } from "app/screens/SubscriptionScreen"
import { CarDetailsScreen } from "app/screens/user/CarDetailsScreen"
import { UserProfileScreen } from "app/screens/user/UserProfileScreen"
import { colors } from "app/theme"
import React from "react"
import Config from "../config"

export type LoggedInStackParamList = {
  User: NavigatorScreenParams<UserTabParamList>
  Onboarding: undefined
  Subscription: undefined
  SubscriptionSuccess: undefined
  UserProfile: undefined
  CarDetails: undefined
  Dashboard: undefined
  VehicleForm: undefined
  VehicleGalleryForm: undefined
  VehicleDetails: undefined
  Welcome: undefined
}

const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof LoggedInStackParamList> = NativeStackScreenProps<
  LoggedInStackParamList,
  T
>

const Stack = createNativeStackNavigator<LoggedInStackParamList>()

export const LoggedInNavigator = () => {
  const { isReady } = useLoggedInBootstrap()
  const initialRoute = useGetInitialLoggedInRoute()

  if (!isReady || !initialRoute) {
    return null
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, navigationBarColor: colors.background }}
      // initialRouteName={isAuthenticated ? "Welcome" : "Login"} // @demo remove-current-line
      initialRouteName={initialRoute}
      // initialRouteName={isAuthenticated ? "Onboarding" : "Login"}
      // initialRouteName="Subscription"
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      <Stack.Screen name="SubscriptionSuccess" component={SubscriptionSuccessScreen} />
      <Stack.Screen name="User" component={UserNavigator} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      {/* VehicleForm Modal */}
      <Stack.Screen
        name="VehicleForm"
        component={AddVehicleForm}
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="VehicleGalleryForm"
        component={VehicleGalleryForm}
        options={{ presentation: "containedModal" }}
      />
      <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} />
      {/* @demo remove-block-end */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}
