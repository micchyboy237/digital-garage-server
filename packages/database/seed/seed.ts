import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create Users with different statuses and attributes
  const user1 = await prisma.user.create({
    data: {
      id: "user-1",
      email: "john.doe@example.com",
      firebaseUid: "firebase-uid-123",
      isEmailVerified: true,
      accountStatus: "ACTIVE",
      firstName: "John",
      lastName: "Doe",
      displayPicture: "https://example.com/profile/johndoe.jpg",
      location: "New York, USA",
      sessions: {
        create: [
          {
            token: "session-token-1",
            expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            provider: "EMAIL_PASSWORD",
            deviceFingerprint: "device-fingerprint-1",
          },
        ],
      },
    },
  })

  const user2 = await prisma.user.create({
    data: {
      id: "user-2",
      email: "jane.smith@example.com",
      firebaseUid: "firebase-uid-456",
      isEmailVerified: false,
      accountStatus: "SELECT_SUBSCRIPTION",
      firstName: "Jane",
      lastName: "Smith",
      displayPicture: "https://example.com/profile/janesmith.jpg",
      location: "Los Angeles, USA",
      sessions: {
        create: [
          {
            token: "session-token-2",
            expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            provider: "GOOGLE",
            deviceFingerprint: "device-fingerprint-2",
          },
        ],
      },
    },
  })

  // Create Subscriptions for users with realistic data
  await prisma.subscription.create({
    data: {
      id: "sub-1",
      productId: "sub-prod-123",
      plan: "MONTH",
      status: "ACTIVE",
      startDate: new Date(),
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      userId: user1.id,
      payments: {
        create: [
          {
            price: 29.99,
            currencyCode: "USD",
            status: "PAID",
            transactionId: "txn-123",
            transactionDate: new Date(),
          },
        ],
      },
    },
  })

  // Create VehicleDetails for vehicle 1 before creating the Vehicle
  await prisma.vehicleDetails.create({
    data: {
      id: "details-1",
      make: "Tesla",
      registrationNumber: "TES1234",
      colour: "Red",
      yearOfManufacture: 2022,
      taxStatus: "Paid",
      taxDueDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      motStatus: "Valid",
      engineCapacity: 2000,
      co2Emissions: 120,
      fuelType: "Electric",
      markedForExport: false,
      typeApproval: "Approved",
      euroStatus: "Euro 6",
      dateOfLastV5CIssued: new Date(),
      wheelplan: "4-wheel drive",
      monthOfFirstRegistration: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    },
  })

  // Create Ownership for vehicles with corresponding posts, documents, and transfers
  const vehicle1 = await prisma.vehicle.create({
    data: {
      id: "vehicle-1",
      make: "Tesla",
      model: "Model S",
      registrationNumber: "TES1234",
      ownerId: user1.id,
      ownerships: {
        create: {
          id: "ownership-1",
          userId: user1.id,
          startDate: new Date(),
          isCurrentOwner: true,
          posts: {
            create: [
              {
                date: new Date(),
                title: "My Tesla Model S",
                description: "An amazing electric car!",
                createdById: user1.id,
                photos: {
                  create: [
                    {
                      url: "https://example.com/posts/tesla_post.jpg",
                      thumbnailUrl: "https://example.com/posts/tesla_post_thumb.jpg",
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  })

  // Create a display photo for the vehicle 1 ownership
  const displayPhoto1 = await prisma.photo.create({
    data: {
      id: "photo-1",
      url: "https://example.com/posts/tesla_display_photo.jpg",
      thumbnailUrl: "https://example.com/posts/tesla_display_photo_thumb.jpg",
      ownershipId: "ownership-1",
    },
  })

  // Similarly, create VehicleDetails for vehicle 2 before creating the Vehicle
  await prisma.vehicleDetails.create({
    data: {
      id: "details-2",
      make: "Ford",
      registrationNumber: "MUS1234",
      colour: "Blue",
      yearOfManufacture: 2020,
      taxStatus: "Paid",
      taxDueDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      motStatus: "Valid",
      engineCapacity: 5000,
      co2Emissions: 250,
      fuelType: "Petrol",
      markedForExport: false,
      typeApproval: "Approved",
      euroStatus: "Euro 5",
      dateOfLastV5CIssued: new Date(),
      wheelplan: "2-wheel drive",
      monthOfFirstRegistration: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
    },
  })

  const vehicle2 = await prisma.vehicle.create({
    data: {
      id: "vehicle-2",
      make: "Ford",
      model: "Mustang",
      registrationNumber: "MUS1234",
      ownerId: user2.id,
      ownerships: {
        create: {
          id: "ownership-2",
          userId: user2.id,
          startDate: new Date(),
          isCurrentOwner: true,
          posts: {
            create: [
              {
                date: new Date(),
                title: "Ford Main Dealer",
                description: "Oil change and maintenance\n£9.99",
                createdById: user2.id,
                category: "HISTORY",
                type: "INVOICE",
                documents: {
                  create: [
                    {
                      fileUrl: "https://example.com/posts/ford_invoice.pdf",
                      mimeType: "application/pdf",
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  })

  // Create a display photo for the vehicle 2 ownership
  const displayPhoto2 = await prisma.photo.create({
    data: {
      id: "photo-2",
      url: "https://example.com/posts/ford_display_photo.jpg",
      thumbnailUrl: "https://example.com/posts/ford_display_photo_thumb.jpg",
      ownershipId: "ownership-2",
    },
  })

  // Vehicle transfer requested from John to Jane
  await prisma.vehicleTransfer.create({
    data: {
      id: "transfer-1",
      vehicleId: vehicle1.id,
      senderId: user1.id,
      recipientId: user2.id,
      status: "REQUESTED",
      reason: "Moving to a new city",
    },
  })

  // Update previous owner
  await prisma.ownership.update({
    where: { id: "ownership-1" },
    data: { isCurrentOwner: false },
  })

  // Update new owner
  await prisma.ownership.update({
    where: { id: "ownership-2" },
    data: { isCurrentOwner: true },
  })

  // Accept the transfer
  // await prisma.vehicleTransfer.update({
  //   where: { id: transfer.id },
  //   data: { status: "ACCEPTED", responseDate: new Date() },
  // })

  console.log("Seeding complete with realistic data!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
