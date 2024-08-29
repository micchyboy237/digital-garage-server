import { t } from "./helpers/createRouter";
import { usersRouter } from "./User.router";
import { sessionsRouter } from "./Session.router";
import { subscriptionsRouter } from "./Subscription.router";
import { paymentsRouter } from "./Payment.router";
import { photosRouter } from "./Photo.router";
import { ownershipsRouter } from "./Ownership.router";
import { vehiclesRouter } from "./Vehicle.router";
import { vehicledetailsRouter } from "./VehicleDetails.router";
import { vehicletransfersRouter } from "./VehicleTransfer.router";
import { vehicledocumentsRouter } from "./VehicleDocument.router";
import { vehiclepostsRouter } from "./VehiclePost.router";

export const appRouter = t.router({
  user: usersRouter,
  session: sessionsRouter,
  subscription: subscriptionsRouter,
  payment: paymentsRouter,
  photo: photosRouter,
  ownership: ownershipsRouter,
  vehicle: vehiclesRouter,
  vehicledetails: vehicledetailsRouter,
  vehicletransfer: vehicletransfersRouter,
  vehicledocument: vehicledocumentsRouter,
  vehiclepost: vehiclepostsRouter
})

