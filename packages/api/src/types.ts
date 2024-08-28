import type { ColumnType } from "kysely"
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export const AuthProvider = {
  EMAIL_PASSWORD: "EMAIL_PASSWORD",
  GOOGLE: "GOOGLE",
  APPLE: "APPLE",
} as const
export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]
export const AccountStatus = {
  ONBOARDING: "ONBOARDING",
  SELECT_SUBSCRIPTION: "SELECT_SUBSCRIPTION",
  ACTIVE: "ACTIVE",
} as const
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]
export const SubscriptionPlan = {
  DAY: "DAY",
  WEEK: "WEEK",
  MONTH: "MONTH",
  YEAR: "YEAR",
} as const
export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]
export const SubscriptionStatus = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  EXPIRED: "EXPIRED",
} as const
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]
export const PaymentStatus = {
  PAID: "PAID",
  REFUNDED: "REFUNDED",
  FAILED: "FAILED",
} as const
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]
export type Payment = {
  id: string
  price: number
  currencyCode: string
  status: PaymentStatus
  transactionId: string
  transactionDate: Timestamp
  subscriptionId: string
}
export type Profile = {
  id: string
  firstName: string | null
  lastName: string | null
  profilePicture: string | null
  location: string | null
  userId: string
}
export type Session = {
  id: string
  token: string
  expiresAt: Timestamp
  provider: AuthProvider
  deviceFingerprint: string
  userId: string
}
export type Subscription = {
  id: string
  productId: string
  plan: SubscriptionPlan | null
  status: Generated<SubscriptionStatus>
  startDate: Timestamp | null
  endDate: Timestamp | null
  expiresAt: Timestamp | null
  userId: string
}
export type User = {
  id: string
  email: string
  firebaseUid: string
  isEmailVerified: Generated<boolean>
  accountStatus: Generated<AccountStatus>
}
export type DB = {
  Payment: Payment
  Profile: Profile
  Session: Session
  Subscription: Subscription
  User: User
}
