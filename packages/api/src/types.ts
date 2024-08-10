import type { ColumnType } from "kysely"
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export const PaymentInterval = {
  monthly: "monthly",
} as const
export type PaymentInterval = (typeof PaymentInterval)[keyof typeof PaymentInterval]
export const SubscriptionStatus = {
  active: "active",
  cancelled: "cancelled",
  paused: "paused",
} as const
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]
export const EventType = {
  post: "post",
  reminder: "reminder",
  invoice: "invoice",
  document: "document",
} as const
export type EventType = (typeof EventType)[keyof typeof EventType]
export const DocumentType = {
  general: "general",
  photo: "photo",
} as const
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]
export const MediaFileType = {
  photo: "photo",
  video: "video",
  document: "document",
} as const
export type MediaFileType = (typeof MediaFileType)[keyof typeof MediaFileType]
export const UserRole = {
  admin: "admin",
  user: "user",
} as const
export type UserRole = (typeof UserRole)[keyof typeof UserRole]
export type Auth = {
  id: string
  password: string | null
  googleId: string | null
  emailVerificationCode: string | null
  emailVerificationExpiry: Timestamp | null
  isEmailVerified: Generated<boolean>
  createdAt: Generated<Timestamp>
  updatedAt: Timestamp
  userId: string
  passwordResetToken: string | null
  passwordResetExpiry: Timestamp | null
}
export type Document = {
  id: string
  type: DocumentType
  date: Timestamp
  title: string | null
  description: string | null
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
  vehicleId: string | null
  createdById: string
  vehicleEventId: string | null
}
export type MediaFile = {
  id: string
  type: MediaFileType
  mimeType: string
  url: string
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
  documentId: string | null
  vehicleOwnershipId: string | null
}
export type Notification = {
  id: string
  title: string
  message: string
  userId: string
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
}
export type NotificationSubscription = {
  id: string
  category: string
  userId: string | null
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
}
export type Payment = {
  id: string
  amount: number
  currency: string
  paymentDate: Generated<Timestamp>
  userSubscriptionId: string
  stripePaymentId: string | null
  iapPaymentId: string | null
}
export type Session = {
  id: string
  token: string
  createdAt: Generated<Timestamp>
  expiresAt: Timestamp
  userId: string
}
export type Subscription = {
  id: string
  name: string
  freeTrialDuration: number | null
  price: number | null
  currency: Generated<string>
  paymentInterval: Generated<PaymentInterval>
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
}
export type User = {
  id: string
  role: Generated<UserRole>
  firstName: string | null
  lastName: string | null
  email: string
  profilePicture: string | null
  location: string | null
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
}
export type UserSubscription = {
  id: string
  subscriptionId: string
  userId: string
  status: Generated<SubscriptionStatus>
  trialStartDate: Timestamp | null
  trialEndDate: Timestamp | null
  startDate: Timestamp | null
  endDate: Timestamp | null
  stripeSubscriptionId: string | null
  iapSubscriptionId: string | null
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
}
export type Vehicle = {
  id: string
  make: string
  model: string
  registrationNumber: string
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
}
export type VehicleDetails = {
  id: string
  registrationNumber: string
  taxStatus: string
  taxDueDate: Timestamp
  motStatus: string
  yearOfManufacture: number
  engineCapacity: number
  co2Emissions: number
  fuelType: string
  markedForExport: boolean
  colour: string
  typeApproval: string
  euroStatus: string
  dateOfLastV5CIssued: Timestamp
  motExpiryDate: Timestamp
  wheelplan: string
  monthOfFirstRegistration: Timestamp
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
}
export type VehicleEvent = {
  id: string
  type: EventType
  header: string
  description: string | null
  date: Timestamp
  price: number | null
  vehicleId: string | null
  createdById: string | null
  vehicleOwnershipId: string | null
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
}
export type VehicleOwnership = {
  id: string
  userId: string
  vehicleId: string
  description: string | null
  startDate: Timestamp | null
  endDate: Timestamp | null
  isCurrentOwner: Generated<boolean>
  isTemporaryOwner: Generated<boolean>
  canEditDocuments: Generated<boolean>
  createdAt: Generated<Timestamp>
  updatedAt: Generated<Timestamp>
}
export type DB = {
  Auth: Auth
  Document: Document
  MediaFile: MediaFile
  Notification: Notification
  NotificationSubscription: NotificationSubscription
  Payment: Payment
  Session: Session
  Subscription: Subscription
  User: User
  UserSubscription: UserSubscription
  Vehicle: Vehicle
  VehicleDetails: VehicleDetails
  VehicleEvent: VehicleEvent
  VehicleOwnership: VehicleOwnership
}
