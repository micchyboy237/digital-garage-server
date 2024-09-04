import { t, shieldedProcedure } from "./helpers/createRouter";
import { VehicleOwnershipAggregateSchema } from "../schemas/aggregateVehicleOwnership.schema";
import { VehicleOwnershipCreateManySchema } from "../schemas/createManyVehicleOwnership.schema";
import { VehicleOwnershipCreateOneSchema } from "../schemas/createOneVehicleOwnership.schema";
import { VehicleOwnershipDeleteManySchema } from "../schemas/deleteManyVehicleOwnership.schema";
import { VehicleOwnershipDeleteOneSchema } from "../schemas/deleteOneVehicleOwnership.schema";
import { VehicleOwnershipFindFirstSchema } from "../schemas/findFirstVehicleOwnership.schema";
import { VehicleOwnershipFindManySchema } from "../schemas/findManyVehicleOwnership.schema";
import { VehicleOwnershipFindUniqueSchema } from "../schemas/findUniqueVehicleOwnership.schema";
import { VehicleOwnershipGroupBySchema } from "../schemas/groupByVehicleOwnership.schema";
import { VehicleOwnershipUpdateManySchema } from "../schemas/updateManyVehicleOwnership.schema";
import { VehicleOwnershipUpdateOneSchema } from "../schemas/updateOneVehicleOwnership.schema";
import { VehicleOwnershipUpsertSchema } from "../schemas/upsertOneVehicleOwnership.schema";

export const vehicleownershipsRouter = t.router({
  aggregateVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVehicleOwnership = await ctx.prisma.vehicleOwnership.aggregate(input);
      return aggregateVehicleOwnership;
    }),
  createManyVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyVehicleOwnership = await ctx.prisma.vehicleOwnership.createMany(input);
      return createManyVehicleOwnership;
    }),
  createOneVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVehicleOwnership = await ctx.prisma.vehicleOwnership.create(input);
      return createOneVehicleOwnership;
    }),
  deleteManyVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVehicleOwnership = await ctx.prisma.vehicleOwnership.deleteMany(input);
      return deleteManyVehicleOwnership;
    }),
  deleteOneVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVehicleOwnership = await ctx.prisma.vehicleOwnership.delete(input);
      return deleteOneVehicleOwnership;
    }),
  findFirstVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleOwnership = await ctx.prisma.vehicleOwnership.findFirst(input);
      return findFirstVehicleOwnership;
    }),
  findFirstVehicleOwnershipOrThrow: shieldedProcedure
    .input(VehicleOwnershipFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleOwnershipOrThrow = await ctx.prisma.vehicleOwnership.findFirstOrThrow(input);
      return findFirstVehicleOwnershipOrThrow;
    }),
  findManyVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipFindManySchema).query(async ({ ctx, input }) => {
      const findManyVehicleOwnership = await ctx.prisma.vehicleOwnership.findMany(input);
      return findManyVehicleOwnership;
    }),
  findUniqueVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleOwnership = await ctx.prisma.vehicleOwnership.findUnique(input);
      return findUniqueVehicleOwnership;
    }),
  findUniqueVehicleOwnershipOrThrow: shieldedProcedure
    .input(VehicleOwnershipFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleOwnershipOrThrow = await ctx.prisma.vehicleOwnership.findUniqueOrThrow(input);
      return findUniqueVehicleOwnershipOrThrow;
    }),
  groupByVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVehicleOwnership = await ctx.prisma.vehicleOwnership.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVehicleOwnership;
    }),
  updateManyVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVehicleOwnership = await ctx.prisma.vehicleOwnership.updateMany(input);
      return updateManyVehicleOwnership;
    }),
  updateOneVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVehicleOwnership = await ctx.prisma.vehicleOwnership.update(input);
      return updateOneVehicleOwnership;
    }),
  upsertOneVehicleOwnership: shieldedProcedure
    .input(VehicleOwnershipUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVehicleOwnership = await ctx.prisma.vehicleOwnership.upsert(input);
      return upsertOneVehicleOwnership;
    }),

}) 
