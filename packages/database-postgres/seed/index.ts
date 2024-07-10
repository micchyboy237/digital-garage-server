import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  // Create Subscriptions
  const subscription1 = await prisma.subscription.create({
    data: {
      type: "Premium",
      renewalDate: new Date("2024-12-31"),
    },
  })

  const subscription2 = await prisma.subscription.create({
    data: {
      type: "Standard",
      renewalDate: new Date("2024-10-15"),
    },
  })

  // Create Users
  const alice = await prisma.user.create({
    data: {
      email: "alice@prisma.io",
      name: "Alice",
      subscriptionId: subscription1.id,
      profilePicture: "http://example.com/alice.jpg",
      location: "New York",
    },
  })

  const bob = await prisma.user.create({
    data: {
      email: "bob@prisma.io",
      name: "Bob",
      subscriptionId: subscription2.id,
      profilePicture: "http://example.com/bob.jpg",
      location: "San Francisco",
    },
  })

  // Create Vehicles
  const vehicle1 = await prisma.vehicle.create({
    data: {
      make: "Toyota",
      model: "Camry",
      year: 2020,
      bodyType: "Sedan",
      driveSide: "Left",
      transmission: "Automatic",
      mileage: 15000,
      engineSize: 2.5,
      registrationNumber: "ABC123",
      lastChangeOfOwnership: new Date("2023-05-15"),
      motStatus: "Valid",
      motExpiry: new Date("2024-05-15"),
      roadTaxStatus: "Paid",
      roadTaxDueDate: new Date("2024-05-15"),
      exteriorColour: "Blue",
      fuelPower: "Petrol",
      chassisNumber: "XYZ987",
      current: true,
      archived: false,
      forSale: false,
      userId: alice.id,
    },
  })

  const vehicle2 = await prisma.vehicle.create({
    data: {
      make: "Honda",
      model: "Civic",
      year: 2018,
      bodyType: "Coupe",
      driveSide: "Right",
      transmission: "Manual",
      mileage: 30000,
      engineSize: 1.8,
      registrationNumber: "DEF456",
      lastChangeOfOwnership: new Date("2022-03-20"),
      motStatus: "Valid",
      motExpiry: new Date("2023-03-20"),
      roadTaxStatus: "Paid",
      roadTaxDueDate: new Date("2023-03-20"),
      exteriorColour: "Red",
      fuelPower: "Petrol",
      chassisNumber: "UVW654",
      current: true,
      archived: false,
      forSale: true,
      userId: bob.id,
    },
  })

  // Create Event
  const event = await prisma.event.create({
    data: {
      name: "Tech Conference 2024",
      organiser: "Tech Inc.",
      location: "San Francisco",
      description: "A conference for tech enthusiasts",
      date: new Date("2024-09-15"),
      time: new Date("2024-09-15T10:00:00Z"),
    },
  })

  // Create Document Groups
  const documentGroup = await prisma.documentGroup.create({
    data: {
      eventId: event.id,
    },
  })

  // Create Documents
  const document1 = await prisma.document.create({
    data: {
      type: "Invoice",
      displayDate: new Date("2024-08-01"),
      header: "Conference Fee",
      description: "Invoice for Tech Conference 2024",
      invoiceValue: 299.99,
      documentGroupId: documentGroup.id,
    },
  })

  const document2 = await prisma.document.create({
    data: {
      type: "Receipt",
      displayDate: new Date("2024-08-02"),
      header: "Payment Receipt",
      description: "Receipt for Tech Conference 2024",
      invoiceValue: 299.99,
      documentGroupId: documentGroup.id,
    },
  })

  console.log({ alice, bob, vehicle1, vehicle2, event, documentGroup, document1, document2 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
