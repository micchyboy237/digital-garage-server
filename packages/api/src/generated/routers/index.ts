import { t } from "./helpers/createRouter";
import { paymentsRouter } from "./Payment.router";
import { subscriptionsRouter } from "./Subscription.router";
import { usersubscriptionsRouter } from "./UserSubscription.router";
import { authsRouter } from "./Auth.router";
import { sessionsRouter } from "./Session.router";
import { usersRouter } from "./User.router";
import { vehiclesRouter } from "./Vehicle.router";
import { vehicleownershipsRouter } from "./VehicleOwnership.router";
import { vehicledetailsRouter } from "./VehicleDetails.router";
import { vehicleeventsRouter } from "./VehicleEvent.router";
import { documentsRouter } from "./Document.router";
import { mediafilesRouter } from "./MediaFile.router";
import { notificationsubscriptionsRouter } from "./NotificationSubscription.router";
import { notificationsRouter } from "./Notification.router";

export const appRouter = t.router({
  payment: paymentsRouter,
  subscription: subscriptionsRouter,
  usersubscription: usersubscriptionsRouter,
  auth: authsRouter,
  session: sessionsRouter,
  user: usersRouter,
  vehicle: vehiclesRouter,
  vehicleownership: vehicleownershipsRouter,
  vehicledetails: vehicledetailsRouter,
  vehicleevent: vehicleeventsRouter,
  document: documentsRouter,
  mediafile: mediafilesRouter,
  notificationsubscription: notificationsubscriptionsRouter,
  notification: notificationsRouter
})

