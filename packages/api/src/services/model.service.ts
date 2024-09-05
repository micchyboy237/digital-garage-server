import { Account, Subscription, User, prisma } from "@boilerplate/database"
import { Session } from "inspector"

export const createOrUpdateUser = async (input): Promise<User> => {
  // Find existing user
  const user = await prisma.user.findUnique({
    where: { email: input.email },
    include: { accounts: true },
  })

  if (!user) {
    // Create new user
    return await prisma.user.create({
      data: {
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
      },
      include: { accounts: true },
    })
  } else {
    return prisma.user.update({
      where: { id: user.id },
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        displayPicture: input.displayPicture,
        location: input.location,
        accountStatus: input.accountStatus,
      },
    })
  }
}

export const createOrUpdateAccount = async (input, userId): Promise<Account> => {
  // Find existing account
  const existingAccount = await prisma.account.findUnique({
    where: { provider_userId: { userId, provider: input.provider } },
  })

  if (!existingAccount) {
    // Create new account
    return prisma.account.create({
      data: {
        provider: input.provider,
        lastLogin: new Date(),
        userId,
        firebaseUid: input.firebaseUid,
        isEmailVerified: input.isEmailVerified || input.provider !== "EMAIL_PASSWORD",
      },
    })
  } else {
    return prisma.account.update({
      where: { id: existingAccount.id },
      data: {
        lastLogin: input.lastLogin,
        firebaseUid: input.firebaseUid,
        isEmailVerified: input.isEmailVerified,
      },
    })
  }
}

export const createOrUpdateSession = async (input, userId): Promise<Session> => {
  // Find existing session by device fingerprint
  const existingSession = await prisma.session.findFirst({
    where: { deviceFingerprint: input.deviceFingerprint },
  })

  if (existingSession) {
    // Update existing session
    return prisma.session.update({
      where: { id: existingSession.id },
      data: {
        token: input.token,
        expiresAt: input.expiresAt,
        accountId: input.accountId,
        userId,
      },
      include: { account: true, user: true },
    })
  } else {
    // Create new session
    return prisma.session.create({
      data: {
        token: input.token,
        expiresAt: input.expiresAt,
        deviceFingerprint: input.deviceFingerprint,
        accountId: input.accountId,
        userId,
      },
      include: { account: true, user: true },
    })
  }
}

export const createOrUpdateSubscription = async (input, userId): Promise<Subscription> => {
  // Find existing subscription
  const existingSubscription = await prisma.subscription.findFirst({
    where: { userId, productId: input.productId },
  })

  if (existingSubscription) {
    // Update existing subscription
    return prisma.subscription.update({
      where: { id: existingSubscription.id },
      data: {
        ...input,
      },
    })
  } else {
    // Create new subscription
    return prisma.subscription.create({
      data: {
        ...input,
        userId,
      },
    })
  }
}
