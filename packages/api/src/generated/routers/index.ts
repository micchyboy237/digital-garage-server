import { t } from "./helpers/createRouter";
import { usersRouter } from "./User.router";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { subscriptionsRouter } from "./Subscription.router";
import { paymentsRouter } from "./Payment.router";
import { mediafilesRouter } from "./MediaFile.router";
import { vehicleownershipsRouter } from "./VehicleOwnership.router";
import { vehiclesRouter } from "./Vehicle.router";
import { vehicledetailsRouter } from "./VehicleDetails.router";
import { vehicletransfersRouter } from "./VehicleTransfer.router";
import { vehiclepostsRouter } from "./VehiclePost.router";

export const appRouter = t.router({
  user: usersRouter,
  account: accountsRouter,
  session: sessionsRouter,
  subscription: subscriptionsRouter,
  payment: paymentsRouter,
  mediafile: mediafilesRouter,
  vehicleownership: vehicleownershipsRouter,
  vehicle: vehiclesRouter,
  vehicledetails: vehicledetailsRouter,
  vehicletransfer: vehicletransfersRouter,
  vehiclepost: vehiclepostsRouter
})

