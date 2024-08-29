import { AuthProvider, AccountStatus, SubscriptionPlan, SubscriptionStatus, PaymentStatus, TransferStatus, FieldType, PostCategory, PostType } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    email: faker.internet.email(),
    firebaseUid: faker.lorem.words(5),
    firstName: undefined,
    lastName: undefined,
    displayPicture: undefined,
    location: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    firebaseUid: faker.lorem.words(5),
    isEmailVerified: false,
    firstName: undefined,
    lastName: undefined,
    displayPicture: undefined,
    location: undefined,
    accountStatus: AccountStatus.ONBOARDING,
  };
}
export function fakeSession() {
  return {
    token: faker.lorem.words(5),
    expiresAt: faker.date.anytime(),
    provider: faker.helpers.arrayElement([AuthProvider.EMAIL_PASSWORD, AuthProvider.GOOGLE, AuthProvider.APPLE] as const),
    deviceFingerprint: faker.lorem.words(5),
  };
}
export function fakeSessionComplete() {
  return {
    id: faker.string.uuid(),
    token: faker.lorem.words(5),
    expiresAt: faker.date.anytime(),
    provider: faker.helpers.arrayElement([AuthProvider.EMAIL_PASSWORD, AuthProvider.GOOGLE, AuthProvider.APPLE] as const),
    deviceFingerprint: faker.lorem.words(5),
    userId: faker.string.uuid(),
  };
}
export function fakeSubscription() {
  return {
    productId: faker.lorem.words(5),
    plan: undefined,
    startDate: undefined,
    endDate: undefined,
    expiresAt: undefined,
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
  };
}
export function fakePayment() {
  return {
    price: faker.number.float(),
    currencyCode: faker.lorem.words(5),
    status: faker.helpers.arrayElement([PaymentStatus.PAID, PaymentStatus.REFUNDED, PaymentStatus.FAILED] as const),
    transactionId: faker.lorem.words(5),
    transactionDate: faker.date.anytime(),
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
  };
}
export function fakePhoto() {
  return {
    url: faker.lorem.words(5),
    thumbnailUrl: faker.lorem.words(5),
  };
}
export function fakePhotoComplete() {
  return {
    id: faker.string.uuid(),
    url: faker.lorem.words(5),
    thumbnailUrl: faker.lorem.words(5),
    postId: undefined,
    ownershipId: undefined,
  };
}
export function fakeOwnership() {
  return {
    endDate: undefined,
    excludedPosts: faker.lorem.words(5).split(' '),
    excludedPhotos: faker.lorem.words(5).split(' '),
    excludedDocs: faker.lorem.words(5).split(' '),
  };
}
export function fakeOwnershipComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    vehicleId: faker.string.uuid(),
    isCurrentOwner: true,
    startDate: new Date(),
    endDate: undefined,
    excludedPosts: faker.lorem.words(5).split(' '),
    excludedPhotos: faker.lorem.words(5).split(' '),
    excludedDocs: faker.lorem.words(5).split(' '),
  };
}
export function fakeVehicle() {
  return {
    make: faker.lorem.words(5),
    model: faker.lorem.words(5),
  };
}
export function fakeVehicleComplete() {
  return {
    id: faker.string.uuid(),
    make: faker.lorem.words(5),
    model: faker.lorem.words(5),
    registrationNumber: faker.string.uuid(),
    ownerId: faker.string.uuid(),
  };
}
export function fakeVehicleDetails() {
  return {
    make: faker.lorem.words(5),
    registrationNumber: faker.lorem.words(5),
    colour: faker.lorem.words(5),
    yearOfManufacture: faker.number.int(),
    taxStatus: faker.lorem.words(5),
    taxDueDate: faker.date.anytime(),
    motStatus: faker.lorem.words(5),
    engineCapacity: faker.number.int(),
    co2Emissions: faker.number.int(),
    fuelType: faker.lorem.words(5),
    markedForExport: faker.datatype.boolean(),
    typeApproval: faker.lorem.words(5),
    wheelplan: faker.lorem.words(5),
    artEndDate: undefined,
    motExpiryDate: undefined,
    monthOfFirstRegistration: undefined,
    euroStatus: undefined,
    dateOfLastV5CIssued: undefined,
    realDrivingEmissions: undefined,
    revenueWeight: undefined,
  };
}
export function fakeVehicleDetailsComplete() {
  return {
    id: faker.string.uuid(),
    make: faker.lorem.words(5),
    registrationNumber: faker.lorem.words(5),
    colour: faker.lorem.words(5),
    yearOfManufacture: faker.number.int(),
    taxStatus: faker.lorem.words(5),
    taxDueDate: faker.date.anytime(),
    motStatus: faker.lorem.words(5),
    engineCapacity: faker.number.int(),
    co2Emissions: faker.number.int(),
    fuelType: faker.lorem.words(5),
    markedForExport: faker.datatype.boolean(),
    typeApproval: faker.lorem.words(5),
    wheelplan: faker.lorem.words(5),
    artEndDate: undefined,
    motExpiryDate: undefined,
    monthOfFirstRegistration: undefined,
    euroStatus: undefined,
    dateOfLastV5CIssued: undefined,
    realDrivingEmissions: undefined,
    revenueWeight: undefined,
  };
}
export function fakeVehicleTransfer() {
  return {
    responseDate: undefined,
    reason: undefined,
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
  };
}
export function fakeVehicleDocument() {
  return {
    fileUrl: faker.lorem.words(5),
    mimeType: faker.lorem.words(5),
  };
}
export function fakeVehicleDocumentComplete() {
  return {
    id: faker.string.uuid(),
    fileUrl: faker.lorem.words(5),
    mimeType: faker.lorem.words(5),
    postId: undefined,
    ownershipId: undefined,
  };
}
export function fakeVehiclePost() {
  return {
    date: faker.date.anytime(),
    title: faker.lorem.words(5),
    description: undefined,
    type: undefined,
  };
}
export function fakeVehiclePostComplete() {
  return {
    id: faker.string.uuid(),
    date: faker.date.anytime(),
    title: faker.lorem.words(5),
    category: PostCategory.GALLERY,
    description: undefined,
    type: undefined,
    createdById: faker.string.uuid(),
    ownershipId: undefined,
  };
}
