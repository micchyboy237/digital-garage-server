import { Account, AccountModel } from "app/models/account/Account"
import { Payment, PaymentModel } from "app/models/payment/Payment"
import { Session, SessionModel } from "app/models/session/Session"
import { Subscription, SubscriptionModel } from "app/models/subscription/Subscription"
import { User, UserModel } from "app/models/user/User"
import { types } from "mobx-state-tree"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    loginForm: types.optional(
      types.model({
        email: types.optional(types.string, ""),
        password: types.optional(types.string, ""),
      }),
      {},
    ),
    authAccount: types.maybe(AccountModel),
    authUser: types.maybe(UserModel),
    authSession: types.maybe(SessionModel),
    authSubscription: types.maybe(SubscriptionModel),
    authPayments: types.optional(types.array(PaymentModel), []),
    // userStore: types.optional(UserStoreModel, {}),
    // sessionStore: types.optional(SessionStoreModel, {}),
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authSession && !!store.authAccount?.isEmailVerified
    },
    // get storesData() {
    //   return {
    //     users: store.userStore.users,
    //     sessions: store.sessionStore.sessions,
    //   }
    // },
    get validationError() {
      return ""
    },
  }))
  .actions((store) => ({
    setLoginFormEmail(email: string) {
      store.loginForm.email = email
    },
    setAuthUser(user: User) {
      store.authUser = user
      // store.userStore.addUser(user) // Add the user to UserStoreModel
    },
    setAuthAccount(account: Account) {
      store.authAccount = account
    },
    setAuthSession(session: Session) {
      store.authSession = session
      // store.sessionStore.addSession(session) // Add the session to SessionStoreModel
    },
    setAuthSubscription(subscription: Subscription) {
      store.authSubscription = subscription
    },
    addAuthPayment(payment: Payment) {
      // Check if the payment already exists in the store
      const existingPayment = store.authPayments.find((p) => p.id === payment.id)
      if (!existingPayment) {
        store.authPayments.push(payment)
      }
    },
    clearAuthPayments() {
      store.authPayments.clear()
    },
    logout() {
      store.authUser = undefined
      store.authSession = undefined
      store.authAccount = undefined
      store.authSubscription = undefined
      store.authPayments.clear()
    },
  }))
