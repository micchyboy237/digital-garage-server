import * as fakeData from "./fakeData" //or your custom output path

export function generateRandomData() {
  return {
    auth: fakeData.fakeAuth(),
    authComplete: fakeData.fakeAuthComplete(),
    session: fakeData.fakeSession(),
    sessionComplete: fakeData.fakeSessionComplete(),
    subscription: fakeData.fakeSubscription(),
    subscriptionComplete: fakeData.fakeSubscriptionComplete(),
    user: fakeData.fakeUser(),
    userComplete: fakeData.fakeUserComplete(),
    vehicle: fakeData.fakeVehicle(),
    vehicleComplete: fakeData.fakeVehicleComplete(),
    vehicleDetails: fakeData.fakeVehicleDetails(),
    vehicleDetailsComplete: fakeData.fakeVehicleDetailsComplete(),
    document: fakeData.fakeDocument(),
    documentComplete: fakeData.fakeDocumentComplete(),
    mediaFile: fakeData.fakeMediaFile(),
    mediaFileComplete: fakeData.fakeMediaFileComplete(),
  }
}
