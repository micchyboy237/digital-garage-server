import { t, shieldedProcedure } from "./helpers/createRouter";
import { VehicleAggregateSchema } from "../schemas/aggregateVehicle.schema";
import { VehicleCreateManySchema } from "../schemas/createManyVehicle.schema";
import { VehicleCreateOneSchema } from "../schemas/createOneVehicle.schema";
import { VehicleDeleteManySchema } from "../schemas/deleteManyVehicle.schema";
import { VehicleDeleteOneSchema } from "../schemas/deleteOneVehicle.schema";
import { VehicleFindFirstSchema } from "../schemas/findFirstVehicle.schema";
import { VehicleFindManySchema } from "../schemas/findManyVehicle.schema";
import { VehicleFindUniqueSchema } from "../schemas/findUniqueVehicle.schema";
import { VehicleGroupBySchema } from "../schemas/groupByVehicle.schema";
import { VehicleUpdateManySchema } from "../schemas/updateManyVehicle.schema";
import { VehicleUpdateOneSchema } from "../schemas/updateOneVehicle.schema";
import { VehicleUpsertSchema } from "../schemas/upsertOneVehicle.schema";

export const vehiclesRouter = t.router({
  aggregateVehicle: shieldedProcedure
    .input(VehicleAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVehicle = await ctx.prisma.vehicle.aggregate(input);
      return aggregateVehicle;
    }),
  createManyVehicle: shieldedProcedure
    .input(VehicleCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyVehicle = await ctx.prisma.vehicle.createMany(input);
      return createManyVehicle;
    }),
  createOneVehicle: shieldedProcedure
    .input(VehicleCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVehicle = await ctx.prisma.vehicle.create(input);
      return createOneVehicle;
    }),
  deleteManyVehicle: shieldedProcedure
    .input(VehicleDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVehicle = await ctx.prisma.vehicle.deleteMany(input);
      return deleteManyVehicle;
    }),
  deleteOneVehicle: shieldedProcedure
    .input(VehicleDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVehicle = await ctx.prisma.vehicle.delete(input);
      return deleteOneVehicle;
    }),
  findFirstVehicle: shieldedProcedure
    .input(VehicleFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicle = await ctx.prisma.vehicle.findFirst(input);
      return findFirstVehicle;
    }),
  findFirstVehicleOrThrow: shieldedProcedure
    .input(VehicleFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleOrThrow = await ctx.prisma.vehicle.findFirstOrThrow(input);
      return findFirstVehicleOrThrow;
    }),
  findManyVehicle: shieldedProcedure
    .input(VehicleFindManySchema).query(async ({ ctx, input }) => {
      const findManyVehicle = await ctx.prisma.vehicle.findMany(input);
      return findManyVehicle;
    }),
  findUniqueVehicle: shieldedProcedure
    .input(VehicleFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicle = await ctx.prisma.vehicle.findUnique(input);
      return findUniqueVehicle;
    }),
  findUniqueVehicleOrThrow: shieldedProcedure
    .input(VehicleFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleOrThrow = await ctx.prisma.vehicle.findUniqueOrThrow(input);
      return findUniqueVehicleOrThrow;
    }),
  groupByVehicle: shieldedProcedure
    .input(VehicleGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVehicle = await ctx.prisma.vehicle.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVehicle;
    }),
  updateManyVehicle: shieldedProcedure
    .input(VehicleUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVehicle = await ctx.prisma.vehicle.updateMany(input);
      return updateManyVehicle;
    }),
  updateOneVehicle: shieldedProcedure
    .input(VehicleUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVehicle = await ctx.prisma.vehicle.update(input);
      return updateOneVehicle;
    }),
  upsertOneVehicle: shieldedProcedure
    .input(VehicleUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVehicle = await ctx.prisma.vehicle.upsert(input);
      return upsertOneVehicle;
    }),

}) 
