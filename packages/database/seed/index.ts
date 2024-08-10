import { DocumentType, EventType, MediaFileType, prisma, UserRole } from ".."
import { mockAssets } from "./mock-assets"

// Remove all attributes that have empty objects, arrays. Also remove all "id" attributes.
const removeEmpty = (obj: any, visited = new Set()) => {
  if (visited.has(obj)) {
    return obj
  }
  visited.add(obj)

  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === "object") {
      removeEmpty(obj[key], visited)
    } else if (obj[key] === undefined || obj[key] === null || obj[key] === "") {
      delete obj[key]
    }
  })
  return obj
}

const removeId = (obj: any, visited = new Set()) => {
  if (visited.has(obj)) {
    return obj
  }
  visited.add(obj)

  Object.keys(obj).forEach((key) => {
    if (key === "id") {
      delete obj[key]
    } else if (obj[key] && typeof obj[key] === "object") {
      obj[key], visited
    }
  })
  return obj
}

async function main() {
  const vehicleDetails1 = await prisma.vehicleDetails.create({
    data: {
      id: "vehicle-details-1",
      registrationNumber: "ABC123",
      taxStatus: "Valid",
      taxDueDate: new Date(),
      motStatus: "Valid",
      yearOfManufacture: 2020,
      engineCapacity: 2000,
      co2Emissions: 150,
      fuelType: "Petrol",
      markedForExport: false,
      colour: "Blue",
      typeApproval: "Approved",
      euroStatus: "Euro 6",
      dateOfLastV5CIssued: new Date(),
      motExpiryDate: new Date(),
      wheelplan: "2 Axle Rigid Body",
      monthOfFirstRegistration: new Date(),
    },
  })

  const vehicleDetails2 = await prisma.vehicleDetails.create({
    data: {
      id: "vehicle-details-2",
      registrationNumber: "XYZ789",
      taxStatus: "Expired",
      taxDueDate: new Date(Date.now() - 365 * 24 * 3600 * 1000),
      motStatus: "Expired",
      yearOfManufacture: 2015,
      engineCapacity: 1800,
      co2Emissions: 140,
      fuelType: "Diesel",
      markedForExport: false,
      colour: "Blue",
      typeApproval: "Approved",
      euroStatus: "Euro 5",
      dateOfLastV5CIssued: new Date(),
      motExpiryDate: new Date(Date.now() - 365 * 24 * 3600 * 1000),
      wheelplan: "4x2",
      monthOfFirstRegistration: new Date("2015-01-01"),
    },
  })

  const vehicle1 = await prisma.vehicle.create({
    data: {
      id: "vehicle-1",
      make: "Toyota",
      model: "Camry",
      registrationNumber: "ABC123",
    },
  })

  const previousVehicle1 = await prisma.vehicle.create({
    data: {
      id: "vehicle-2",
      make: "Honda",
      model: "Civic",
      registrationNumber: "XYZ789",
    },
  })

  const user1 = await prisma.user.create({
    data: {
      id: "user-1",
      role: UserRole.user,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      profilePicture: mockAssets.USER1_PROFILE_PIC,
      location: "New York, USA",
      auth: {
        create: {
          id: "auth-1",
          password: "asdasdasd",
          googleId: undefined,
          emailVerificationCode: "123456",
          emailVerificationExpiry: new Date(Date.now() + 3600 * 1000),
          isEmailVerified: true,
          passwordResetToken: "reset-token",
          passwordResetExpiry: new Date(Date.now() + 3600 * 1000),
        },
      },
      session: {
        create: {
          id: "session-1",
          token: "authorization-token-1",
          expiresAt: new Date(Date.now() + 3600 * 1000),
        },
      },
      vehicleOwnerships: {
        createMany: {
          data: [
            {
              id: "vehicle-ownership-1",
              vehicleId: vehicle1.id,
              startDate: new Date("2020-02-03"),
              isCurrentOwner: true,
              isTemporaryOwner: false,
              canEditDocuments: true,
            },
            {
              id: "vehicle-ownership-2",
              vehicleId: previousVehicle1.id,
              startDate: new Date("2015-01-01"),
              endDate: new Date("2019-12-31"),
              isCurrentOwner: false,
              isTemporaryOwner: false,
              canEditDocuments: false,
            },
          ],
        },
      },

      //     // session: [],
      //     // subscription: {} as UserSubscription, // Circular reference, will be assigned later
      //     // vehicleOwnerships: [],
      //     // documents: [],
      //     // events: [], // Will be populated with mock events
      //     // notificationSubs: [],
      //     // notifications: [],
    },
  })

  const displayPicture1 = await prisma.mediaFile.create({
    data: {
      id: "display-photo-1",
      type: MediaFileType.photo,
      url: mockAssets.VEHICLE1_DISPLAY_PIC,
      mimeType: "image/jpeg",
      vehicleOwnershipId: "vehicle-ownership-1",
    },
  })

  const displayPicture2 = await prisma.mediaFile.create({
    data: {
      id: "display-photo-2",
      type: MediaFileType.photo,
      url: mockAssets.VEHICLE2_DISPLAY_PIC,
      mimeType: "image/jpeg",
      vehicleOwnershipId: "vehicle-ownership-2",
    },
  })

  const events1 = await prisma.vehicleEvent.createMany({
    data: [
      {
        id: "event-1",
        type: EventType.post,
        header: "National Car Rally",
        description: "Great event, took a bit of time to get there but took some great pictures.",
        date: new Date("2024-06-27"),
        vehicleId: "vehicle-1",
        vehicleOwnershipId: "vehicle-ownership-1",
        createdById: "user-1",
      },
      {
        id: "event-2",
        type: EventType.reminder,
        header: "MOT Due",
        date: new Date("2024-06-19"),
        vehicleId: "vehicle-1",
        vehicleOwnershipId: "vehicle-ownership-1",
        createdById: "user-1",
      },
      {
        id: "event-3",
        type: EventType.invoice,
        header: "Volvo Main Dealer",
        description: "Oil change and service",
        date: new Date("2024-06-02"),
        price: 9.99,
        vehicleId: "vehicle-1",
        vehicleOwnershipId: "vehicle-ownership-1",
        createdById: "user-1",
      },
      {
        id: "event-4",
        type: EventType.document,
        header: "V5 Proof of Ownership",
        description: "Vehicle ownership affidavit from DVLA",
        date: new Date("2024-08-02"),
        vehicleId: "vehicle-1",
        vehicleOwnershipId: "vehicle-ownership-1",
        createdById: "user-1",
      },
    ],
  })

  const eventPhotoDocument1 = await prisma.document.create({
    data: {
      id: "event-photo-1",
      type: DocumentType.photo,
      date: new Date(),
      vehicleId: vehicle1.id,
      vehicleEventId: "event-1",
      createdById: user1.id,
    },
  })

  const photoFile1 = await prisma.mediaFile.create({
    data: {
      id: "photo-1",
      type: MediaFileType.photo,
      url: mockAssets.VEHICLE1_GALLERY_PIC,
      mimeType: "image/jpeg",
      documentId: "event-photo-1",
    },
  })

  const photoFile2 = await prisma.mediaFile.create({
    data: {
      id: "photo-2",
      type: MediaFileType.photo,
      url: mockAssets.VEHICLE1_GALLERY_PIC,
      mimeType: "image/jpeg",
      documentId: "event-photo-1",
    },
  })

  const mockInvoiceDocument: Document = await prisma.document.create({
    data: {
      id: "document-1",
      type: DocumentType.general,
      date: new Date(),
      title: "Invoice from Volvo Main Dealer",
      vehicleId: "vehicle-1",
      vehicleEventId: "event-3",
      createdById: "user-1",
    },
  })

  const mockProofOfOwnershipDocument: Document = await prisma.document.create({
    data: {
      id: "document-2",
      type: DocumentType.general,
      date: new Date(),
      title: "Proof of Ownership from DVLA",
      vehicleId: "vehicle-1",
      vehicleEventId: "event-4",
      createdById: "user-1",
    },
  })

  const mockInvoiceFile = await prisma.mediaFile.create({
    data: {
      id: "file-1",
      type: MediaFileType.document,
      url: mockAssets.VEHICLE1_INVOICE,
      mimeType: "application/pdf",
      documentId: "document-1",
    },
  })

  const mockProofOfOwnershipFile = await prisma.mediaFile.create({
    data: {
      id: "file-2",
      type: MediaFileType.document,
      url: mockAssets.VEHICLE1_PROOF_OF_OWNERSHIP,
      mimeType: "application/pdf",
      documentId: "document-2",
    },
  })

  // 2nd user for testing transfer of ownership
  const user2 = await prisma.user.create({
    data: {
      id: "user-2",
      role: UserRole.user,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      profilePicture: mockAssets.USER2_PROFILE_PIC,
      location: "Los Angeles, USA",
      auth: {
        create: {
          id: "auth-2",
          password: "asdasdasd",
          googleId: undefined,
          emailVerificationCode: "654321",
          emailVerificationExpiry: new Date(Date.now() + 3600 * 1000),
          isEmailVerified: true,
          passwordResetToken: "reset-token-2",
          passwordResetExpiry: new Date(Date.now() + 3600 * 1000),
        },
      },
    },
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
