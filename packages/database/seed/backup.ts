import { prisma } from ".."
import { REGISTRATION_NUMBERS, VEHICLE_DATA, VEHICLE_MODELS } from "./mock"
import { RandomUserApiResponse } from "./types"

async function generateSubscriptions() {
  const free = await prisma.subscription.create({
    data: {
      name: "Free",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  const monthly = await prisma.subscription.create({
    data: {
      name: "Monthly",
      freeTrialDuration: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  return {
    free,
    monthly,
  }
}

async function generateUsers(n: number = 2) {
  const response = await fetch(`https://randomuser.me/api/?nat=us&results=${n}`)
  const randomUsers = (await response.json()) as RandomUserApiResponse
  const user1 = await prisma.user.create({
    data: {
      email: randomUsers.results[0].email,
      firstName: randomUsers.results[0].name.first,
      lastName: randomUsers.results[0].name.last,
      profilePicture: randomUsers.results[0].picture.large,
      location: `${randomUsers.results[0].location.city}, ${randomUsers.results[0].location.state}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: randomUsers.results[1].email,
      firstName: randomUsers.results[1].name.first,
      lastName: randomUsers.results[1].name.last,
      profilePicture: randomUsers.results[1].picture.large,
      location: `${randomUsers.results[1].location.city}, ${randomUsers.results[1].location.state}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  return {
    user1,
    user2,
  }
}

async function generateUserSubscription(userId: string, subscriptionId: string) {
  const result = await prisma.userSubscription.create({
    data: {
      userId,
      subscriptionId,
      startDate: new Date(),
      endDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  return result
}

async function generateVehicle(userId: string, registrationNumber: string) {
  const vehicleDetails1 = await prisma.vehicleDetails.create({
    data: {
      ...VEHICLE_DATA[registrationNumber],
    },
  })

  const vehicle1 = await prisma.vehicle.create({
    data: {
      registrationNumber: vehicleDetails1.registrationNumber,
      model: VEHICLE_MODELS[registrationNumber],
    },
  })

  const vehicleOwnership1 = await prisma.vehicleOwnership.create({
    data: {
      userId: userId,
      vehicleId: vehicle1.id,
      startDate: new Date(),
      isCurrentOwner: true,
    },
  })

  return vehicleOwnership1
}

async function generateDocuments(userId: string, vehicleId: string) {
  const document1 = await prisma.document.create({
    data: {
      type: "invoice",
      invoiceValue: 1000,
      displayDate: new Date("2024-06-02"),
      header: "Volvo Main Dealer",
      description: "Replacement timing chain cover",
      vehicleId,
      createdById: userId,
    },
  })

  const document2 = await prisma.document.create({
    data: {
      type: "reminder",
      invoiceValue: 0,
      displayDate: new Date("2024-06-19"),
      header: "MOT Due",
      description: "",
      vehicleId,
      createdById: userId,
    },
  })

  const document3 = await prisma.document.create({
    data: {
      type: "document",
      invoiceValue: 0,
      displayDate: new Date("2024-08-02"),
      header: "V5 Proof of Ownership",
      description: `Replacement received from DVLA.`,
      vehicleId,
      createdById: userId,
    },
  })

  return {
    document1,
    document2,
    document3,
  }
}

async function generateVehiclePhotoDocuments(userId: string, vehicleId: string, urlPhotos: string[]) {
  const vehiclePhotoDocument = await prisma.document.create({
    data: {
      type: "post",
      invoiceValue: 0,
      displayDate: new Date("2024-06-27"),
      header: "National Car Rally",
      description: `Great event, took a bit of time to get there but took some great pictures.`,
      vehicleId,
      createdById: userId,
    },
  })

  const vehiclePhotos: any[] = []

  for (let index = 0; index < urlPhotos.length; index++) {
    const url = urlPhotos[index]
    const vehiclePhoto = await prisma.mediaFile.create({
      data: {
        type: "photo",
        url,
        documentId: vehiclePhotoDocument.id,
      },
    })
    vehiclePhotos[index] = vehiclePhoto
  }

  return vehiclePhotos
}

async function generateAuth(userId: string) {
  const auth = await prisma.auth.create({
    data: {
      password: "asdasd!123",
      isEmailVerified: false,
      emailVerificationCode: "123456",
      emailVerificationExpiry: new Date("2024-06-27"),
      userId,
    },
  })

  return auth
}

async function generateSession(userId: string) {
  const session = await prisma.session.create({
    data: {
      token: `authorization-token-${userId}`,
      expiresAt: new Date("2024-10-01"),
      userId,
    },
  })

  return session
}

async function main() {
  // Create Subscriptions
  const subscriptions = await generateSubscriptions()
  const users = await generateUsers()
  // Create Auth
  await generateAuth(users.user1.id)
  await generateAuth(users.user2.id)
  // Create Session
  await generateSession(users.user1.id)
  await generateSession(users.user2.id)
  // Create User Subscriptions
  await generateUserSubscription(users.user1.id, subscriptions.free.id)
  await generateUserSubscription(users.user2.id, subscriptions.monthly.id)
  // Create Vehicles
  // await generateVehicleData(users.user1.id, "ABC123")
  // await generateVehicleData(users.user2.id, "DEF456")
  // Call generateVehicleData user1 for 7 vehicles
  // Call generateVehicleData user2 for 3 vehicles
  // Use Promise.all to run all the calls in parallel
  const user1Vehicles = REGISTRATION_NUMBERS.slice(0, 7)
  const user2Vehicles = REGISTRATION_NUMBERS.slice(7, 10)

  const n = 6
  const response = await fetch(`https://randomuser.me/api/?nat=us&results=${n}`)
  const randomUsers = (await response.json()) as RandomUserApiResponse
  const urlPhotos: string[] = []
  for (let i = 0; i < n; i++) {
    urlPhotos.push(randomUsers.results[i].picture.large)
  }

  await Promise.all([
    ...user1Vehicles.map((registrationNumber) => generateVehicleData(users.user1.id, registrationNumber)),
    ...user2Vehicles.map((registrationNumber) => generateVehicleData(users.user2.id, registrationNumber)),
  ])

  async function generateVehicleData(userId: string, registrationNumber: string) {
    const vehicles = await generateVehicle(userId, registrationNumber)
    const vehicle1Id = vehicles.vehicleId
    // Create Documents
    await generateDocuments(userId, vehicle1Id)
    // Create Vehicle Photo Documents
    await generateVehiclePhotoDocuments(userId, vehicle1Id, urlPhotos)
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
