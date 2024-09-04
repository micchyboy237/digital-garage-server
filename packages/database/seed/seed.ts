import { MediaFileType, PostCategory, PostType, prisma } from ".."

async function main() {
  // Create Users and Sessions
  const user1 = await createUser("john.doe@example.com", "John", "Doe")
  const user2 = await createUser("jane.smith@example.com", "Jane", "Smith")
  await createSession(user1.id, "EMAIL_PASSWORD")
  await createSession(user2.id, "GOOGLE")

  // Create Subscriptions and Payments
  const subscription1 = await createSubscription(user1.id, "MONTH")
  await createPayment(subscription1.id, 29.99, "USD", "PAID")

  const subscription2 = await createSubscription(user2.id, "YEAR")
  await createPayment(subscription2.id, 299.99, "USD", "PAID")

  // Add Vehicles and Ownerships
  const vehicle1 = await createVehicle("ABC123", "Toyota", "Corolla", user1.id)
  const ownership1 = await createOwnership(user1.id, vehicle1.id)

  const vehicle2 = await createVehicle("XYZ789", "Honda", "Civic", user2.id)
  const ownership2 = await createOwnership(user2.id, vehicle2.id)

  // Add Vehicle Details and Documents
  await createVehicleDetails(vehicle1.id, "Toyota", "Corolla", 2020, ownership1.id)
  await createVehicleDetails(vehicle2.id, "Honda", "Civic", 2021, ownership2.id)

  // Create Vehicle Documents and Posts
  const document1 = await createVehicleDocument(
    user1.id,
    ownership1.id,
    "service_invoice.pdf",
    "Service Invoice",
    MediaFileType.DOCUMENT,
  )
  const document2 = await createVehicleDocument(
    user2.id,
    ownership2.id,
    "registration.pdf",
    "Registration Document",
    MediaFileType.DOCUMENT,
  )

  // Add Vehicle Posts and Media Files
  await createVehiclePost(user1.id, ownership1.id, "Maintenance Log", PostCategory.HISTORY, PostType.REMINDER)
  const photo1 = await createMediaFile(
    "maintenance_photo.jpg",
    MediaFileType.IMAGE,
    "image/jpeg",
    "https://example.com/media/maintenance_photo.jpg",
    ownership1.id,
  )
  const video1 = await createMediaFile(
    "maintenance_video.mp4",
    MediaFileType.VIDEO,
    "video/mp4",
    "https://example.com/media/maintenance_video.mp4",
    ownership1.id,
  )

  // Handle Vehicle Transfer with Media Exclusion
  const transfer1 = await createVehicleTransfer(vehicle1.id, user1.id, user2.id, "REQUESTED", [photo1.id], [], [document1.id])

  // Accept Transfer and Update Ownerships
  await acceptVehicleTransfer(transfer1.id)

  console.log("Seeding completed!")
}

async function createUser(email: string, firstName: string, lastName: string) {
  return prisma.user.create({
    data: {
      email,
      firebaseUid: `${email}-uid`,
      firstName,
      lastName,
      isEmailVerified: true,
    },
  })
}

async function createSession(userId: string, provider: "EMAIL_PASSWORD" | "GOOGLE" | "APPLE") {
  return prisma.session.create({
    data: {
      token: `${userId}-token`,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      provider,
      deviceFingerprint: `${userId}-device`,
      userId,
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

async function createVehicle(registrationNumber: string, make: string, model: string, ownerId: string) {
  return prisma.vehicle.create({
    data: {
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

async function createVehicleDocument(
  userId: string,
  ownershipId: string,
  fileName: string,
  description: string,
  type: MediaFileType,
) {
  return prisma.vehicleDocument.create({
    data: {
      ownership: {
        connect: { id: ownershipId },
      },
      file: {
        create: {
          type,
          mimeType: "application/pdf",
          fileName,
          url: `url-to-${fileName}`,
          thumbnailUrl: `url-to-${fileName}-thumbnail`,
        },
      },
      post: {
        create: {
          title: description,
          category: PostCategory.HISTORY,
          type: PostType.DOCUMENT,
          ownership: {
            connect: { id: ownershipId },
          },
          createdBy: {
            connect: { id: userId }, // Corrected to connect by User ID
          },
        },
      },
    },
  })
}

async function createVehiclePost(userId: string, ownershipId: string, title: string, category: PostCategory, type: PostType) {
  return prisma.vehiclePost.create({
    data: {
      title,
      category,
      type,
      ownershipId,
      createdById: userId,
    },
  })
}

async function createMediaFile(fileName: string, type: MediaFileType, mimeType: string, url: string, ownershipId: string) {
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
    },
  })
}

async function createVehicleTransfer(
  vehicleId: string,
  senderId: string,
  recipientId: string,
  status: "REQUESTED" | "ACCEPTED" | "REJECTED",
  excludedPhotos: string[],
  excludedVideos: string[],
  excludedDocs: string[],
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
      excludedPhotos: { set: excludedPhotos },
      excludedVideos: { set: excludedVideos },
      excludedDocs: { set: excludedDocs },
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
  await prisma.vehicleOwnership.updateMany({
    where: { vehicleId: transfer.vehicleId, userId: transfer.senderId },
    data: { isCurrentOwner: false, endDate: new Date() },
  })

  // Transfer media files to new ownership, excluding specified files
  await prisma.mediaFile.updateMany({
    where: {
      ownershipId: transfer.senderId,
      id: { notIn: [...transfer.excludedPhotos, ...transfer.excludedVideos, ...transfer.excludedDocs] },
    },
    data: { ownershipId: newOwnership.id },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
