import { AuthProvider, AccountStatus, SubscriptionPlan, SubscriptionStatus, PaymentStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    email: faker.internet.email(),
    password: undefined,
    firebaseUid: faker.lorem.words(5),
    provider: faker.helpers.arrayElement([AuthProvider.EMAIL_PASSWORD, AuthProvider.GOOGLE, AuthProvider.APPLE] as const),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    password: undefined,
    firebaseUid: faker.lorem.words(5),
    provider: faker.helpers.arrayElement([AuthProvider.EMAIL_PASSWORD, AuthProvider.GOOGLE, AuthProvider.APPLE] as const),
    accountStatus: AccountStatus.ONBOARDING,
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
    expiresAt: faker.date.anytime(),
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
    plan: undefined,
    startDate: undefined,
    endDate: undefined,
  };
}
export function fakeSubscriptionComplete() {
  return {
    id: faker.string.uuid(),
    plan: undefined,
    status: SubscriptionStatus.ACTIVE,
    startDate: undefined,
    endDate: undefined,
    userId: faker.string.uuid(),
  };
}
export function fakePayment() {
  return {
    amount: faker.number.float(),
    currency: faker.lorem.words(5),
    status: faker.helpers.arrayElement([PaymentStatus.PAID, PaymentStatus.REFUNDED, PaymentStatus.PENDING, PaymentStatus.FAILED] as const),
    transactionDate: faker.date.anytime(),
  };
}
export function fakePaymentComplete() {
  return {
    id: faker.string.uuid(),
    amount: faker.number.float(),
    currency: faker.lorem.words(5),
    status: faker.helpers.arrayElement([PaymentStatus.PAID, PaymentStatus.REFUNDED, PaymentStatus.PENDING, PaymentStatus.FAILED] as const),
    transactionDate: faker.date.anytime(),
    subscriptionId: faker.string.uuid(),
  };
}
