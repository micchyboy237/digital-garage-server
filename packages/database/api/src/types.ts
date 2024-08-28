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
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY",
  WEEKLY: "WEEKLY",
  CUSTOM: "CUSTOM",
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
  PENDING: "PENDING",
  FAILED: "FAILED",
} as const
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]
export type Payment = {
  id: string
  amount: number
  currency: string
  status: PaymentStatus
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
  userId: string
}
export type Subscription = {
  id: string
  plan: SubscriptionPlan | null
  status: Generated<SubscriptionStatus>
  startDate: Timestamp | null
  endDate: Timestamp | null
  userId: string
}
export type User = {
  id: string
  email: string
  password: string | null
  firebaseUid: string
  provider: AuthProvider
  accountStatus: Generated<AccountStatus>
}
export type DB = {
  Payment: Payment
  Profile: Profile
  Session: Session
  Subscription: Subscription
  User: User
}
