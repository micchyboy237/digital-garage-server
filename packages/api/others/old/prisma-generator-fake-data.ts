import { AuthProvider, AccountStatus, SubscriptionPlan, SubscriptionStatus, PaymentStatus, TransferStatus, FieldType, PostCategory, PostType, MediaFileType } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    email: faker.internet.email(),
    firstName: undefined,
    lastName: undefined,
    location: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    firstName: undefined,
    lastName: undefined,
    displayPictureId: undefined,
    location: undefined,
    accountStatus: AccountStatus.ONBOARDING,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeAccount() {
  return {
    provider: faker.helpers.arrayElement([AuthProvider.EMAIL_PASSWORD, AuthProvider.GOOGLE, AuthProvider.APPLE] as const),
    firebaseUid: faker.lorem.words(5),
    lastLogin: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakeAccountComplete() {
  return {
    id: faker.string.uuid(),
    provider: faker.helpers.arrayElement([AuthProvider.EMAIL_PASSWORD, AuthProvider.GOOGLE, AuthProvider.APPLE] as const),
    userId: faker.string.uuid(),
    firebaseUid: faker.lorem.words(5),
    isEmailVerified: false,
    lastLogin: undefined,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeSession() {
  return {
    token: faker.lorem.words(5),
    expiresAt: faker.date.anytime(),
    deviceFingerprint: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeSessionComplete() {
  return {
    id: faker.string.uuid(),
    token: faker.lorem.words(5),
    expiresAt: faker.date.anytime(),
    accountId: faker.string.uuid(),
    deviceFingerprint: faker.lorem.words(5),
    userId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeSubscription() {
  return {
    productId: faker.lorem.words(5),
    plan: undefined,
    startDate: undefined,
    endDate: undefined,
    expiresAt: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakeSubscriptionComplete() {
  return {
    id: faker.string.uuid(),
    productId: faker.lorem.words(5),
    plan: undefined,
    status: SubscriptionStatus.ACTIVE,
    startDate: undefined,
    endDate: undefined,
    expiresAt: undefined,
    userId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePayment() {
  return {
    price: faker.number.float(),
    currencyCode: faker.lorem.words(5),
    status: faker.helpers.arrayElement([PaymentStatus.PAID, PaymentStatus.REFUNDED, PaymentStatus.FAILED] as const),
    transactionId: faker.lorem.words(5),
    transactionDate: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePaymentComplete() {
  return {
    id: faker.string.uuid(),
    price: faker.number.float(),
    currencyCode: faker.lorem.words(5),
    status: faker.helpers.arrayElement([PaymentStatus.PAID, PaymentStatus.REFUNDED, PaymentStatus.FAILED] as const),
    transactionId: faker.lorem.words(5),
    transactionDate: faker.date.anytime(),
    subscriptionId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeMediaFile() {
  return {
    type: faker.helpers.arrayElement([MediaFileType.IMAGE, MediaFileType.VIDEO, MediaFileType.DOCUMENT] as const),
    mimeType: faker.lorem.words(5),
    fileName: faker.lorem.words(5),
    url: faker.lorem.words(5),
    thumbnailUrl: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeMediaFileComplete() {
  return {
    id: faker.string.uuid(),
    type: faker.helpers.arrayElement([MediaFileType.IMAGE, MediaFileType.VIDEO, MediaFileType.DOCUMENT] as const),
    mimeType: faker.lorem.words(5),
    fileName: faker.lorem.words(5),
    url: faker.lorem.words(5),
    thumbnailUrl: faker.lorem.words(5),
    postId: undefined,
    ownershipId: undefined,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeVehicleOwnership() {
  return {
    endDate: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakeVehicleOwnershipComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    vehicleId: faker.string.uuid(),
    isCurrentOwner: true,
    vehicleDisplayPhotoId: undefined,
    startDate: new Date(),
    endDate: undefined,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeVehicle() {
  return {
    make: faker.lorem.words(5),
    model: faker.lorem.words(5),
    registrationNumber: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeVehicleComplete() {
  return {
    id: faker.string.uuid(),
    make: faker.lorem.words(5),
    model: faker.lorem.words(5),
    registrationNumber: faker.lorem.words(5),
    ownerId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeVehicleDetails() {
  return {
    registrationNumber: faker.lorem.words(5),
    make: faker.lorem.words(5),
    model: faker.lorem.words(5),
    yearOfManufacture: faker.number.int(),
    engineCapacity: faker.number.int(),
    fuelType: faker.lorem.words(5),
    colour: faker.lorem.words(5),
    taxStatus: undefined,
    taxDueDate: undefined,
    motStatus: undefined,
    motExpiryDate: undefined,
    co2Emissions: undefined,
    markedForExport: undefined,
    typeApproval: undefined,
    wheelplan: undefined,
    artEndDate: undefined,
    monthOfFirstRegistration: undefined,
    euroStatus: undefined,
    dateOfLastV5CIssued: undefined,
    realDrivingEmissions: undefined,
    revenueWeight: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakeVehicleDetailsComplete() {
  return {
    id: faker.string.uuid(),
    fromApi: true,
    registrationNumber: faker.lorem.words(5),
    make: faker.lorem.words(5),
    model: faker.lorem.words(5),
    yearOfManufacture: faker.number.int(),
    engineCapacity: faker.number.int(),
    fuelType: faker.lorem.words(5),
    colour: faker.lorem.words(5),
    taxStatus: undefined,
    taxDueDate: undefined,
    motStatus: undefined,
    motExpiryDate: undefined,
    co2Emissions: undefined,
    markedForExport: undefined,
    typeApproval: undefined,
    wheelplan: undefined,
    artEndDate: undefined,
    monthOfFirstRegistration: undefined,
    euroStatus: undefined,
    dateOfLastV5CIssued: undefined,
    realDrivingEmissions: undefined,
    revenueWeight: undefined,
    ownershipId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeVehicleTransfer() {
  return {
    responseDate: undefined,
    reason: undefined,
    excludedMediaFileTypes: faker.helpers.arrayElement([MediaFileType.IMAGE, MediaFileType.VIDEO, MediaFileType.DOCUMENT] as const),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeVehicleTransferComplete() {
  return {
    id: faker.string.uuid(),
    vehicleId: faker.string.uuid(),
    senderId: faker.string.uuid(),
    recipientId: faker.string.uuid(),
    status: TransferStatus.REQUESTED,
    transferDate: new Date(),
    responseDate: undefined,
    reason: undefined,
    excludedMediaFileTypes: faker.helpers.arrayElement([MediaFileType.IMAGE, MediaFileType.VIDEO, MediaFileType.DOCUMENT] as const),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeVehiclePost() {
  return {
    title: faker.lorem.words(5),
    description: undefined,
    type: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakeVehiclePostComplete() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    category: PostCategory.GALLERY,
    description: undefined,
    type: undefined,
    createdById: faker.string.uuid(),
    ownershipId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
