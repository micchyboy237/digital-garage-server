import { MediaFileType, PostCategory, PostType, prisma } from ".."

async function main() {
  // Create Users and Sessions
  const user1 = await createUser("user-1", "john.doe@example.com", "John", "Doe")
  const user2 = await createUser("user-2", "jane.smith@example.com", "Jane", "Smith")

  // Create Accounts for Auth Providers
  const user1Account1 = await createAccount("EMAIL_PASSWORD", user1.id)
  const user1Account2 = await createAccount("APPLE", user1.id)
  const user2Account1 = await createAccount("GOOGLE", user2.id)

  const user1DeviceFingerprint = `${user1.id}-device`
  const user2DeviceFingerprint = `${user2.id}-device`

  await createOrUpdateSession({
    token: "session-token-0",
    accountId: user1Account1.id,
    userId: user1.id,
    deviceFingerprint: user1DeviceFingerprint,
  })
  await createOrUpdateSession({
    token: "session-token-1",
    accountId: user1Account2.id,
    userId: user1.id,
    deviceFingerprint: user1DeviceFingerprint,
  })
  await createOrUpdateSession({
    token: "session-token-2",
    accountId: user2Account1.id,
    userId: user2.id,
    deviceFingerprint: user2DeviceFingerprint,
  })

  // Create Subscriptions and Payments
  const subscription1 = await createSubscription(user1.id, "MONTH")
  await createPayment(subscription1.id, 29.99, "USD", "PAID")

  const subscription2 = await createSubscription(user2.id, "YEAR")
  await createPayment(subscription2.id, 299.99, "USD", "PAID")

  // Add Vehicles and Ownerships
  const vehicle1 = await createVehicle("vehicle-1", "ABC123", "Toyota", "Corolla", user1.id)
  const ownership1 = await createOwnership(user1.id, vehicle1.id)

  const vehicle2 = await createVehicle("vehicle-2", "XYZ789", "Honda", "Civic", user2.id)
  const ownership2 = await createOwnership(user2.id, vehicle2.id)

  // Add Vehicle Details and Documents
  await createVehicleDetails(vehicle1.id, "Toyota", "Corolla", 2020, ownership1.id)
  await createVehicleDetails(vehicle2.id, "Honda", "Civic", 2021, ownership2.id)

  // Create Vehicle Posts and Media Files
  const galleryPost1 = await createVehicleGalleryPost(user1.id, ownership1.id, "Maintenance Log")
  const photo1 = await createMediaFile(
    "maintenance_photo1.jpg",
    MediaFileType.IMAGE,
    "image/jpeg",
    "https://example.com/media/maintenance_photo1.jpg",
    ownership1.id,
    galleryPost1.id,
  )
  const photo2 = await createMediaFile(
    "maintenance_photo2.jpg",
    MediaFileType.IMAGE,
    "image/jpeg",
    "https://example.com/media/maintenance_photo2.jpg",
    ownership1.id,
    galleryPost1.id,
  )
  const video1 = await createMediaFile(
    "maintenance_video.mp4",
    MediaFileType.VIDEO,
    "video/mp4",
    "https://example.com/media/maintenance_video.mp4",
    ownership1.id,
    galleryPost1.id,
  )

  const historyPost1 = await createVehicleHistoryPost(user1.id, ownership1.id, "Service History", PostType.DOCUMENT)

  const pdfDoc1 = await createMediaFile(
    "service_history.pdf",
    MediaFileType.DOCUMENT,
    "application/pdf",
    "https://example.com/media/service_history.pdf",
    ownership1.id,
    historyPost1.id,
  )

  // Handle Vehicle Transfer with Media Exclusion
  const transfer1 = await createVehicleTransfer(vehicle1.id, user1.id, user2.id, "REQUESTED", [MediaFileType.IMAGE])

  // Accept Transfer and Update Ownerships
  await acceptVehicleTransfer(transfer1.id)

  console.log("Seeding completed!")
}

async function createUser(id: string, email: string, firstName: string, lastName: string) {
  return prisma.user.create({
    data: {
      id,
      email,
      firstName,
      lastName,
    },
  })
}

async function createOrUpdateSession({
  token,
  accountId,
  userId,
  deviceFingerprint,
}: {
  token: string
  accountId: string
  userId: string
  deviceFingerprint: string
}) {
  // Find existing session by device fingerprint
  const existingSession = await prisma.session.findFirst({
    where: { deviceFingerprint },
  })

  if (existingSession) {
    // Update existing session
    return prisma.session.update({
      where: { id: existingSession.id },
      data: {
        token,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
        accountId,
        userId,
      },
    })
  } else {
    // Create new session
    return prisma.session.create({
      data: {
        token,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
        deviceFingerprint,
        accountId,
        userId,
      },
    })
  }
}

async function createAccount(provider: "EMAIL_PASSWORD" | "GOOGLE" | "APPLE", userId: string) {
  return prisma.account.create({
    data: {
      provider,
      lastLogin: new Date(),
      userId,
      firebaseUid: `${userId}-uid`,
      isEmailVerified: provider !== "EMAIL_PASSWORD",
    },
  })
}

async function createSubscription(userId: string, plan: "DAY" | "WEEK" | "MONTH" | "YEAR") {
  return prisma.subscription.create({
    data: {
      productId: `product-${plan}`,
      plan,
      userId,
    },
  })
}

async function createPayment(
  subscriptionId: string,
  price: number,
  currencyCode: string,
  status: "PAID" | "REFUNDED" | "FAILED",
) {
  return prisma.payment.create({
    data: {
      price,
      currencyCode,
      status,
      transactionId: `txn-${subscriptionId}`,
      transactionDate: new Date(),
      subscriptionId,
    },
  })
}

async function createVehicle(id: string, registrationNumber: string, make: string, model: string, ownerId: string) {
  return prisma.vehicle.create({
    data: {
      id,
      registrationNumber,
      make,
      model,
      ownerId,
    },
  })
}

async function createOwnership(userId: string, vehicleId: string) {
  return prisma.vehicleOwnership.create({
    data: {
      userId,
      vehicleId,
    },
  })
}

async function createVehicleDetails(
  vehicleId: string,
  make: string,
  model: string,
  yearOfManufacture: number,
  ownershipId: string,
) {
  return prisma.vehicleDetails.create({
    data: {
      registrationNumber: vehicleId,
      make,
      model,
      yearOfManufacture,
      colour: "Black",
      taxDueDate: new Date(),
      taxStatus: "Paid",
      motStatus: "Valid",
      engineCapacity: 1600,
      fuelType: "Petrol",
      ownership: {
        connect: { id: ownershipId },
      },
    },
  })
}

async function createVehicleGalleryPost(userId: string, ownershipId: string, title: string) {
  return prisma.vehiclePost.create({
    data: {
      title,
      category: PostCategory.GALLERY,
      ownershipId,
      createdById: userId,
    },
  })
}

async function createVehicleHistoryPost(userId: string, ownershipId: string, title: string, type: PostType) {
  return prisma.vehiclePost.create({
    data: {
      title,
      category: PostCategory.HISTORY,
      type,
      ownershipId,
      createdById: userId,
    },
  })
}

async function createMediaFile(
  fileName: string,
  type: MediaFileType,
  mimeType: string,
  url: string,
  ownershipId: string,
  postId?: string,
) {
  return prisma.mediaFile.create({
    data: {
      type,
      mimeType,
      fileName,
      url,
      thumbnailUrl: `${url}-thumbnail`,
      ownership: {
        connect: { id: ownershipId },
      },
      post: postId ? { connect: { id: postId } } : undefined,
    },
  })
}

async function createVehicleTransfer(
  vehicleId: string,
  senderId: string,
  recipientId: string,
  status: "REQUESTED" | "ACCEPTED" | "REJECTED",
  excludedMediaFileTypes: MediaFileType[],
) {
  return prisma.vehicleTransfer.create({
    data: {
      vehicle: {
        connect: { id: vehicleId },
      },
      sender: {
        connect: { id: senderId },
      },
      recipient: {
        connect: { id: recipientId },
      },
      status,
      transferDate: new Date(),
      excludedMediaFileTypes,
    },
  })
}

async function acceptVehicleTransfer(transferId: string) {
  const transfer = await prisma.vehicleTransfer.update({
    where: { id: transferId },
    data: { status: "ACCEPTED", responseDate: new Date() },
    include: { vehicle: true, sender: true, recipient: true },
  })

  // Create new ownership for recipient
  const newOwnership = await createOwnership(transfer.recipientId, transfer.vehicleId)

  // Update old ownership to no longer be the current owner
  const oldOwnership = await prisma.vehicleOwnership.update({
    where: { userId_vehicleId: { userId: transfer.senderId, vehicleId: transfer.vehicleId } },
    data: {
      isCurrentOwner: false,
      endDate: new Date(),
    },
    include: {
      posts: {
        include: { files: true },
      },
    },
  })

  console.log("newOwnership.id:", newOwnership.id)
  console.log("oldOwnership.posts:", oldOwnership.posts)
  console.log("transfer.excludedMediaFileTypes:", transfer.excludedMediaFileTypes)

  // Transfer old ownership files to new ownership, excluding specified files
  const filesToTransfer = []
  for (const post of oldOwnership.posts) {
    const newPost = await prisma.vehiclePost.create({
      data: {
        title: post.title,
        description: post.description,
        category: post.category,
        type: post.type,
        ownershipId: newOwnership.id,
        createdById: transfer.recipientId,
      },
    })

    for (const file of post.files) {
      if (!transfer.excludedMediaFileTypes.includes(file.type)) {
        const newFile = await prisma.mediaFile.create({
          data: {
            type: file.type,
            mimeType: file.mimeType,
            fileName: file.fileName,
            url: file.url,
            thumbnailUrl: file.thumbnailUrl,
            ownership: {
              connect: { id: newOwnership.id },
            },
            post: {
              connect: { id: newPost.id },
            },
          },
        })
        filesToTransfer.push(newFile)
      }
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
