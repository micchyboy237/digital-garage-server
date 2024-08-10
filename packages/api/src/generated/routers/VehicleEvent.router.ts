import { t, shieldedProcedure } from "./helpers/createRouter";
import { VehicleEventAggregateSchema } from "../schemas/aggregateVehicleEvent.schema";
import { VehicleEventCreateManySchema } from "../schemas/createManyVehicleEvent.schema";
import { VehicleEventCreateOneSchema } from "../schemas/createOneVehicleEvent.schema";
import { VehicleEventDeleteManySchema } from "../schemas/deleteManyVehicleEvent.schema";
import { VehicleEventDeleteOneSchema } from "../schemas/deleteOneVehicleEvent.schema";
import { VehicleEventFindFirstSchema } from "../schemas/findFirstVehicleEvent.schema";
import { VehicleEventFindManySchema } from "../schemas/findManyVehicleEvent.schema";
import { VehicleEventFindUniqueSchema } from "../schemas/findUniqueVehicleEvent.schema";
import { VehicleEventGroupBySchema } from "../schemas/groupByVehicleEvent.schema";
import { VehicleEventUpdateManySchema } from "../schemas/updateManyVehicleEvent.schema";
import { VehicleEventUpdateOneSchema } from "../schemas/updateOneVehicleEvent.schema";
import { VehicleEventUpsertSchema } from "../schemas/upsertOneVehicleEvent.schema";

export const vehicleeventsRouter = t.router({
  aggregateVehicleEvent: shieldedProcedure
    .input(VehicleEventAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVehicleEvent = await ctx.prisma.vehicleEvent.aggregate(input);
      return aggregateVehicleEvent;
    }),
  createManyVehicleEvent: shieldedProcedure
    .input(VehicleEventCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyVehicleEvent = await ctx.prisma.vehicleEvent.createMany(input);
      return createManyVehicleEvent;
    }),
  createOneVehicleEvent: shieldedProcedure
    .input(VehicleEventCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVehicleEvent = await ctx.prisma.vehicleEvent.create(input);
      return createOneVehicleEvent;
    }),
  deleteManyVehicleEvent: shieldedProcedure
    .input(VehicleEventDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVehicleEvent = await ctx.prisma.vehicleEvent.deleteMany(input);
      return deleteManyVehicleEvent;
    }),
  deleteOneVehicleEvent: shieldedProcedure
    .input(VehicleEventDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVehicleEvent = await ctx.prisma.vehicleEvent.delete(input);
      return deleteOneVehicleEvent;
    }),
  findFirstVehicleEvent: shieldedProcedure
    .input(VehicleEventFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleEvent = await ctx.prisma.vehicleEvent.findFirst(input);
      return findFirstVehicleEvent;
    }),
  findFirstVehicleEventOrThrow: shieldedProcedure
    .input(VehicleEventFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleEventOrThrow = await ctx.prisma.vehicleEvent.findFirstOrThrow(input);
      return findFirstVehicleEventOrThrow;
    }),
  findManyVehicleEvent: shieldedProcedure
    .input(VehicleEventFindManySchema).query(async ({ ctx, input }) => {
      const findManyVehicleEvent = await ctx.prisma.vehicleEvent.findMany(input);
      return findManyVehicleEvent;
    }),
  findUniqueVehicleEvent: shieldedProcedure
    .input(VehicleEventFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleEvent = await ctx.prisma.vehicleEvent.findUnique(input);
      return findUniqueVehicleEvent;
    }),
  findUniqueVehicleEventOrThrow: shieldedProcedure
    .input(VehicleEventFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleEventOrThrow = await ctx.prisma.vehicleEvent.findUniqueOrThrow(input);
      return findUniqueVehicleEventOrThrow;
    }),
  groupByVehicleEvent: shieldedProcedure
    .input(VehicleEventGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVehicleEvent = await ctx.prisma.vehicleEvent.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVehicleEvent;
    }),
  updateManyVehicleEvent: shieldedProcedure
    .input(VehicleEventUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVehicleEvent = await ctx.prisma.vehicleEvent.updateMany(input);
      return updateManyVehicleEvent;
    }),
  updateOneVehicleEvent: shieldedProcedure
    .input(VehicleEventUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVehicleEvent = await ctx.prisma.vehicleEvent.update(input);
      return updateOneVehicleEvent;
    }),
  upsertOneVehicleEvent: shieldedProcedure
    .input(VehicleEventUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVehicleEvent = await ctx.prisma.vehicleEvent.upsert(input);
      return upsertOneVehicleEvent;
    }),

}) 
