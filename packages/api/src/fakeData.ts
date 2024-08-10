import { PaymentInterval, SubscriptionStatus, EventType, DocumentType, MediaFileType, UserRole } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakePayment() {
  return {
    amount: faker.number.float(),
    currency: faker.lorem.words(5),
    stripePaymentId: undefined,
    iapPaymentId: undefined,
  };
}
export function fakePaymentComplete() {
  return {
    id: faker.string.uuid(),
    amount: faker.number.float(),
    currency: faker.lorem.words(5),
    paymentDate: new Date(),
    userSubscriptionId: faker.string.uuid(),
    stripePaymentId: undefined,
    iapPaymentId: undefined,
  };
}
export function fakeSubscription() {
  return {
    name: faker.person.fullName(),
    freeTrialDuration: undefined,
    price: undefined,
  };
}
export function fakeSubscriptionComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    freeTrialDuration: undefined,
    price: undefined,
    currency: 'GBP',
    paymentInterval: PaymentInterval.monthly,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
export function fakeUserSubscription() {
  return {
    trialStartDate: undefined,
    trialEndDate: undefined,
    startDate: undefined,
    endDate: undefined,
    stripeSubscriptionId: undefined,
    iapSubscriptionId: undefined,
  };
}
export function fakeUserSubscriptionComplete() {
  return {
    id: faker.string.uuid(),
    subscriptionId: faker.string.uuid(),
    userId: faker.string.uuid(),
    status: SubscriptionStatus.active,
    trialStartDate: undefined,
    trialEndDate: undefined,
    startDate: undefined,
    endDate: undefined,
    stripeSubscriptionId: undefined,
    iapSubscriptionId: undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
export function fakeAuth() {
  return {
    password: undefined,
    googleId: undefined,
    emailVerificationCode: undefined,
    emailVerificationExpiry: undefined,
    updatedAt: faker.date.anytime(),
    passwordResetToken: undefined,
    passwordResetExpiry: undefined,
  };
}
export function fakeAuthComplete() {
  return {
    id: faker.string.uuid(),
    password: undefined,
    googleId: undefined,
    emailVerificationCode: undefined,
    emailVerificationExpiry: undefined,
    isEmailVerified: false,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    userId: faker.string.uuid(),
    passwordResetToken: undefined,
    passwordResetExpiry: undefined,
  };
}
export function fakeSession() {
  return {
    token: faker.lorem.words(5),
    expiresAt: faker.date.anytime(),
  };
}
export function fakeSessionComplete() {
  return {
    id: faker.string.uuid(),
    token: faker.lorem.words(5),
    createdAt: new Date(),
    expiresAt: faker.date.anytime(),
    userId: faker.string.uuid(),
  };
}
export function fakeUser() {
  return {
    firstName: undefined,
    lastName: undefined,
    email: faker.internet.email(),
    location: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    role: UserRole.user,
    firstName: undefined,
    lastName: undefined,
    email: faker.internet.email(),
    location: undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
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
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
export function fakeVehicleOwnership() {
  return {
    description: undefined,
    startDate: undefined,
    endDate: undefined,
  };
}
export function fakeVehicleOwnershipComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    vehicleId: faker.string.uuid(),
    description: undefined,
    startDate: undefined,
    endDate: undefined,
    isCurrentOwner: true,
    isTemporaryOwner: false,
    canEditDocuments: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
export function fakeVehicleDetails() {
  return {
    registrationNumber: faker.lorem.words(5),
    taxStatus: faker.lorem.words(5),
    taxDueDate: faker.date.anytime(),
    motStatus: faker.lorem.words(5),
    yearOfManufacture: faker.number.int(),
    engineCapacity: faker.number.int(),
    co2Emissions: faker.number.int(),
    fuelType: faker.lorem.words(5),
    markedForExport: faker.datatype.boolean(),
    colour: faker.lorem.words(5),
    typeApproval: faker.lorem.words(5),
    euroStatus: faker.lorem.words(5),
    dateOfLastV5CIssued: faker.date.anytime(),
    motExpiryDate: faker.date.anytime(),
    wheelplan: faker.lorem.words(5),
    monthOfFirstRegistration: faker.date.anytime(),
  };
}
export function fakeVehicleDetailsComplete() {
  return {
    id: faker.string.uuid(),
    registrationNumber: faker.lorem.words(5),
    taxStatus: faker.lorem.words(5),
    taxDueDate: faker.date.anytime(),
    motStatus: faker.lorem.words(5),
    yearOfManufacture: faker.number.int(),
    engineCapacity: faker.number.int(),
    co2Emissions: faker.number.int(),
    fuelType: faker.lorem.words(5),
    markedForExport: faker.datatype.boolean(),
    colour: faker.lorem.words(5),
    typeApproval: faker.lorem.words(5),
    euroStatus: faker.lorem.words(5),
    dateOfLastV5CIssued: faker.date.anytime(),
    motExpiryDate: faker.date.anytime(),
    wheelplan: faker.lorem.words(5),
    monthOfFirstRegistration: faker.date.anytime(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
export function fakeVehicleEvent() {
  return {
    type: faker.helpers.arrayElement([EventType.post, EventType.reminder, EventType.invoice, EventType.document] as const),
    header: faker.lorem.words(5),
    description: undefined,
    date: faker.date.anytime(),
    price: undefined,
  };
}
export function fakeVehicleEventComplete() {
  return {
    id: faker.string.uuid(),
    type: faker.helpers.arrayElement([EventType.post, EventType.reminder, EventType.invoice, EventType.document] as const),
    header: faker.lorem.words(5),
    description: undefined,
    date: faker.date.anytime(),
    price: undefined,
    vehicleId: undefined,
    createdById: undefined,
    vehicleOwnershipId: undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
export function fakeDocument() {
  return {
    type: faker.helpers.arrayElement([DocumentType.general, DocumentType.photo] as const),
    date: faker.date.anytime(),
    title: undefined,
    description: undefined,
  };
}
export function fakeDocumentComplete() {
  return {
    id: faker.string.uuid(),
    type: faker.helpers.arrayElement([DocumentType.general, DocumentType.photo] as const),
    date: faker.date.anytime(),
    title: undefined,
    description: undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
    vehicleId: undefined,
    createdById: faker.string.uuid(),
    vehicleEventId: undefined,
  };
}
export function fakeMediaFile() {
  return {
    type: faker.helpers.arrayElement([MediaFileType.photo, MediaFileType.video, MediaFileType.document] as const),
    mimeType: faker.lorem.words(5),
    url: faker.lorem.words(5),
  };
}
export function fakeMediaFileComplete() {
  return {
    id: faker.string.uuid(),
    type: faker.helpers.arrayElement([MediaFileType.photo, MediaFileType.video, MediaFileType.document] as const),
    mimeType: faker.lorem.words(5),
    url: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: new Date(),
    documentId: undefined,
    userId: undefined,
    vehicleOwnershipId: undefined,
  };
}
export function fakeNotificationSubscription() {
  return {
    category: faker.lorem.words(5),
  };
}
export function fakeNotificationSubscriptionComplete() {
  return {
    id: faker.string.uuid(),
    category: faker.lorem.words(5),
    userId: undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
export function fakeNotification() {
  return {
    title: faker.lorem.words(5),
    message: faker.lorem.words(5),
  };
}
export function fakeNotificationComplete() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    message: faker.lorem.words(5),
    userId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
