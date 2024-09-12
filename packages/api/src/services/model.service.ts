import { Account, PostCategory, Subscription, User, prisma } from "@boilerplate/database"

export const createOrUpdateUser = async (input): Promise<User> => {
  // Find existing user
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  })

  if (!user) {
    // Create new user
    return await prisma.user.create({
      data: {
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
      },
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

export const createOrUpdateSession = async (input, userId) => {
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

export const createOrUpdateVehicle = async (input, userId) => {
  // Find existing vehicle
  const existingVehicle = await prisma.vehicle.findFirst({
    where: { ownerId: userId, registrationNumber: input.registrationNumber },
  })

  if (existingVehicle) {
    // Update existing vehicle
    return prisma.vehicle.update({
      where: { id: existingVehicle.id },
      data: {
        ...input,
      },
    })
  } else {
    // Create new vehicle
    return prisma.vehicle.create({
      data: {
        ...input,
        ownerId: userId,
      },
    })
  }
}

export const createOrUpdateVehicleOwnership = async (input, userId) => {
  console.log("Creating or updating vehicle ownership:", input)
  // Find existing vehicle ownership
  const existingOwnership = await prisma.vehicleOwnership.findUnique({
    where: { userId_vehicleId: { userId, vehicleId: input.vehicleId } },
  })

  if (existingOwnership) {
    // Update existing ownership
    return prisma.vehicleOwnership.update({
      where: { id: existingOwnership.id },
      data: {
        ...input,
      },
    })
  } else {
    // Create new ownership
    return prisma.vehicleOwnership.create({
      data: {
        ...input,
        userId,
      },
    })
  }
}

export const createOrUpdateVehicleDetails = async (input, ownershipId) => {
  // Find existing vehicle details
  const existingDetails = await prisma.vehicleDetails.findUnique({
    where: { ownershipId },
  })

  if (existingDetails) {
    // Update existing details
    return prisma.vehicleDetails.update({
      where: { id: existingDetails.id },
      data: {
        ...input,
      },
    })
  } else {
    // Create new details
    return prisma.vehicleDetails.create({
      data: {
        ...input,
        ownershipId,
      },
    })
  }
}

export const createOrUpdateVehicleGalleryPost = async (input, userId) => {
  // Find existing vehicle gallery post
  const existingPost = await prisma.vehiclePost.findFirst({
    where: { id: input.id, category: PostCategory.GALLERY, ownershipId: input.ownershipId },
  })

  if (existingPost) {
    // Update existing post
    return prisma.vehiclePost.update({
      where: { id: existingPost.id },
      data: {
        ...input,
      },
    })
  } else {
    // Create new post
    return prisma.vehiclePost.create({
      data: {
        ...input,
        ownershipId: input.ownershipId,
        category: PostCategory.GALLERY,
        createdById: userId,
      },
    })
  }
}

export const createOrUpdateMediaFile = async (input) => {
  // Find existing media file
  const existingFile = await prisma.mediaFile.findFirst({
    where: { url: input.url },
  })

  if (!existingFile) {
    // Create new file
    return prisma.mediaFile.create({
      data: {
        ...input,
      },
    })
  }
}
