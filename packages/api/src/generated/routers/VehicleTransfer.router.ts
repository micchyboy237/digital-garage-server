import { t, shieldedProcedure } from "./helpers/createRouter";
import { VehicleTransferAggregateSchema } from "../schemas/aggregateVehicleTransfer.schema";
import { VehicleTransferCreateManySchema } from "../schemas/createManyVehicleTransfer.schema";
import { VehicleTransferCreateOneSchema } from "../schemas/createOneVehicleTransfer.schema";
import { VehicleTransferDeleteManySchema } from "../schemas/deleteManyVehicleTransfer.schema";
import { VehicleTransferDeleteOneSchema } from "../schemas/deleteOneVehicleTransfer.schema";
import { VehicleTransferFindFirstSchema } from "../schemas/findFirstVehicleTransfer.schema";
import { VehicleTransferFindManySchema } from "../schemas/findManyVehicleTransfer.schema";
import { VehicleTransferFindUniqueSchema } from "../schemas/findUniqueVehicleTransfer.schema";
import { VehicleTransferGroupBySchema } from "../schemas/groupByVehicleTransfer.schema";
import { VehicleTransferUpdateManySchema } from "../schemas/updateManyVehicleTransfer.schema";
import { VehicleTransferUpdateOneSchema } from "../schemas/updateOneVehicleTransfer.schema";
import { VehicleTransferUpsertSchema } from "../schemas/upsertOneVehicleTransfer.schema";

export const vehicletransfersRouter = t.router({
  aggregateVehicleTransfer: shieldedProcedure
    .input(VehicleTransferAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVehicleTransfer = await ctx.prisma.vehicleTransfer.aggregate(input);
      return aggregateVehicleTransfer;
    }),
  createManyVehicleTransfer: shieldedProcedure
    .input(VehicleTransferCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyVehicleTransfer = await ctx.prisma.vehicleTransfer.createMany(input);
      return createManyVehicleTransfer;
    }),
  createOneVehicleTransfer: shieldedProcedure
    .input(VehicleTransferCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVehicleTransfer = await ctx.prisma.vehicleTransfer.create(input);
      return createOneVehicleTransfer;
    }),
  deleteManyVehicleTransfer: shieldedProcedure
    .input(VehicleTransferDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVehicleTransfer = await ctx.prisma.vehicleTransfer.deleteMany(input);
      return deleteManyVehicleTransfer;
    }),
  deleteOneVehicleTransfer: shieldedProcedure
    .input(VehicleTransferDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVehicleTransfer = await ctx.prisma.vehicleTransfer.delete(input);
      return deleteOneVehicleTransfer;
    }),
  findFirstVehicleTransfer: shieldedProcedure
    .input(VehicleTransferFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleTransfer = await ctx.prisma.vehicleTransfer.findFirst(input);
      return findFirstVehicleTransfer;
    }),
  findFirstVehicleTransferOrThrow: shieldedProcedure
    .input(VehicleTransferFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleTransferOrThrow = await ctx.prisma.vehicleTransfer.findFirstOrThrow(input);
      return findFirstVehicleTransferOrThrow;
    }),
  findManyVehicleTransfer: shieldedProcedure
    .input(VehicleTransferFindManySchema).query(async ({ ctx, input }) => {
      const findManyVehicleTransfer = await ctx.prisma.vehicleTransfer.findMany(input);
      return findManyVehicleTransfer;
    }),
  findUniqueVehicleTransfer: shieldedProcedure
    .input(VehicleTransferFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleTransfer = await ctx.prisma.vehicleTransfer.findUnique(input);
      return findUniqueVehicleTransfer;
    }),
  findUniqueVehicleTransferOrThrow: shieldedProcedure
    .input(VehicleTransferFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleTransferOrThrow = await ctx.prisma.vehicleTransfer.findUniqueOrThrow(input);
      return findUniqueVehicleTransferOrThrow;
    }),
  groupByVehicleTransfer: shieldedProcedure
    .input(VehicleTransferGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVehicleTransfer = await ctx.prisma.vehicleTransfer.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVehicleTransfer;
    }),
  updateManyVehicleTransfer: shieldedProcedure
    .input(VehicleTransferUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVehicleTransfer = await ctx.prisma.vehicleTransfer.updateMany(input);
      return updateManyVehicleTransfer;
    }),
  updateOneVehicleTransfer: shieldedProcedure
    .input(VehicleTransferUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVehicleTransfer = await ctx.prisma.vehicleTransfer.update(input);
      return updateOneVehicleTransfer;
    }),
  upsertOneVehicleTransfer: shieldedProcedure
    .input(VehicleTransferUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVehicleTransfer = await ctx.prisma.vehicleTransfer.upsert(input);
      return upsertOneVehicleTransfer;
    }),

}) 
