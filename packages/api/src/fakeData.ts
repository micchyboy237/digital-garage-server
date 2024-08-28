import { AuthProvider, AccountStatus, SubscriptionPlan, SubscriptionStatus, PaymentStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    email: faker.internet.email(),
    firebaseUid: faker.lorem.words(5),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    firebaseUid: faker.lorem.words(5),
    isEmailVerified: false,
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
export function fakeProfile() {
  return {
    firstName: undefined,
    lastName: undefined,
    profilePicture: undefined,
    location: undefined,
  };
}
export function fakeProfileComplete() {
  return {
    id: faker.string.uuid(),
    firstName: undefined,
    lastName: undefined,
    profilePicture: undefined,
    location: undefined,
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
