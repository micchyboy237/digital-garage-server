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
export const TransferStatus = {
  REQUESTED: "REQUESTED",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
} as const
export type TransferStatus = (typeof TransferStatus)[keyof typeof TransferStatus]
export const FieldType = {
  STRING: "STRING",
  NUMBER: "NUMBER",
  DATE: "DATE",
  BOOLEAN: "BOOLEAN",
} as const
export type FieldType = (typeof FieldType)[keyof typeof FieldType]
export const PostCategory = {
  GALLERY: "GALLERY",
  HISTORY: "HISTORY",
} as const
export type PostCategory = (typeof PostCategory)[keyof typeof PostCategory]
export const PostType = {
  REMINDER: "REMINDER",
  INVOICE: "INVOICE",
  DOCUMENT: "DOCUMENT",
} as const
export type PostType = (typeof PostType)[keyof typeof PostType]
export type Ownership = {
  id: string
  userId: string
  vehicleId: string
  isCurrentOwner: Generated<boolean>
  startDate: Generated<Timestamp>
  endDate: Timestamp | null
  excludedPosts: string[]
  excludedPhotos: string[]
  excludedDocs: string[]
}
export type Payment = {
  id: string
  price: number
  currencyCode: string
  status: PaymentStatus
  transactionId: string
  transactionDate: Timestamp
  subscriptionId: string
}
export type Photo = {
  id: string
  url: string
  thumbnailUrl: string
  postId: string | null
  ownershipId: string | null
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
  firstName: string | null
  lastName: string | null
  displayPicture: string | null
  location: string | null
  accountStatus: Generated<AccountStatus>
}
export type Vehicle = {
  id: string
  make: string
  model: string
  registrationNumber: string
  ownerId: string
}
export type VehicleDetails = {
  id: string
  make: string
  registrationNumber: string
  colour: string
  yearOfManufacture: number
  taxStatus: string
  taxDueDate: Timestamp
  motStatus: string
  engineCapacity: number
  co2Emissions: number
  fuelType: string
  markedForExport: boolean
  typeApproval: string
  wheelplan: string
  artEndDate: Timestamp | null
  motExpiryDate: Timestamp | null
  monthOfFirstRegistration: Timestamp | null
  euroStatus: string | null
  dateOfLastV5CIssued: Timestamp | null
  realDrivingEmissions: string | null
  revenueWeight: number | null
}
export type VehicleDocument = {
  id: string
  fileUrl: string
  mimeType: string
  postId: string | null
  ownershipId: string | null
}
export type VehiclePost = {
  id: string
  date: Timestamp
  title: string
  category: Generated<PostCategory>
  description: string | null
  type: PostType | null
  createdById: string
  ownershipId: string | null
}
export type VehicleTransfer = {
  id: string
  vehicleId: string
  senderId: string
  recipientId: string
  status: Generated<TransferStatus>
  transferDate: Generated<Timestamp>
  responseDate: Timestamp | null
  reason: string | null
}
export type DB = {
  Ownership: Ownership
  Payment: Payment
  Photo: Photo
  Session: Session
  Subscription: Subscription
  User: User
  Vehicle: Vehicle
  VehicleDetails: VehicleDetails
  VehicleDocument: VehicleDocument
  VehiclePost: VehiclePost
  VehicleTransfer: VehicleTransfer
}
