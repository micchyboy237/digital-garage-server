const prisma = new PrismaClient()

export const vehicleController = {
  addVehicle: async (ctx, { make, model, year, vin, registration, taxStatus, motStatus, technicalSpecifications }) => {
    const vehicle = await prisma.vehicle.create({
      data: {
        userId: ctx.user.userId,
        make,
        model,
        year,
        vin,
        registration,
        taxStatus,
        motStatus,
        technicalSpecifications,
      },
    })
    return vehicle
  },

  getVehicles: async (ctx) => {
    const vehicles = await prisma.vehicle.findMany({ where: { userId: ctx.user.userId } })
    return vehicles
  },

  getVehicleById: async (ctx, id) => {
    const vehicle = await prisma.vehicle.findUnique({ where: { id } })
    return vehicle
  },

  updateVehicle: async (ctx, { id, make, model, year, vin, registration, taxStatus, motStatus, technicalSpecifications }) => {
    const vehicle = await prisma.vehicle.update({
      where: { id },
      data: { make, model, year, vin, registration, taxStatus, motStatus, technicalSpecifications },
    })
    return vehicle
  },

  deleteVehicle: async (ctx, id) => {
    await prisma.vehicle.delete({ where: { id } })
    return { message: "Vehicle deleted successfully" }
  },
}
