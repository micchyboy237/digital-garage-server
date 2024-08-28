import { t } from "./helpers/createRouter";
import { usersRouter } from "./User.router";
import { sessionsRouter } from "./Session.router";
import { profilesRouter } from "./Profile.router";
import { subscriptionsRouter } from "./Subscription.router";
import { paymentsRouter } from "./Payment.router";

export const appRouter = t.router({
  user: usersRouter,
  session: sessionsRouter,
  profile: profilesRouter,
  subscription: subscriptionsRouter,
  payment: paymentsRouter
})

