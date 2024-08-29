import { t, shieldedProcedure } from "./helpers/createRouter";
import { VehicleDetailsAggregateSchema } from "../schemas/aggregateVehicleDetails.schema";
import { VehicleDetailsCreateManySchema } from "../schemas/createManyVehicleDetails.schema";
import { VehicleDetailsCreateOneSchema } from "../schemas/createOneVehicleDetails.schema";
import { VehicleDetailsDeleteManySchema } from "../schemas/deleteManyVehicleDetails.schema";
import { VehicleDetailsDeleteOneSchema } from "../schemas/deleteOneVehicleDetails.schema";
import { VehicleDetailsFindFirstSchema } from "../schemas/findFirstVehicleDetails.schema";
import { VehicleDetailsFindManySchema } from "../schemas/findManyVehicleDetails.schema";
import { VehicleDetailsFindUniqueSchema } from "../schemas/findUniqueVehicleDetails.schema";
import { VehicleDetailsGroupBySchema } from "../schemas/groupByVehicleDetails.schema";
import { VehicleDetailsUpdateManySchema } from "../schemas/updateManyVehicleDetails.schema";
import { VehicleDetailsUpdateOneSchema } from "../schemas/updateOneVehicleDetails.schema";
import { VehicleDetailsUpsertSchema } from "../schemas/upsertOneVehicleDetails.schema";

export const vehicledetailsRouter = t.router({
  aggregateVehicleDetails: shieldedProcedure
    .input(VehicleDetailsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVehicleDetails = await ctx.prisma.vehicleDetails.aggregate(input);
      return aggregateVehicleDetails;
    }),
  createManyVehicleDetails: shieldedProcedure
    .input(VehicleDetailsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyVehicleDetails = await ctx.prisma.vehicleDetails.createMany(input);
      return createManyVehicleDetails;
    }),
  createOneVehicleDetails: shieldedProcedure
    .input(VehicleDetailsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVehicleDetails = await ctx.prisma.vehicleDetails.create(input);
      return createOneVehicleDetails;
    }),
  deleteManyVehicleDetails: shieldedProcedure
    .input(VehicleDetailsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVehicleDetails = await ctx.prisma.vehicleDetails.deleteMany(input);
      return deleteManyVehicleDetails;
    }),
  deleteOneVehicleDetails: shieldedProcedure
    .input(VehicleDetailsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVehicleDetails = await ctx.prisma.vehicleDetails.delete(input);
      return deleteOneVehicleDetails;
    }),
  findFirstVehicleDetails: shieldedProcedure
    .input(VehicleDetailsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleDetails = await ctx.prisma.vehicleDetails.findFirst(input);
      return findFirstVehicleDetails;
    }),
  findFirstVehicleDetailsOrThrow: shieldedProcedure
    .input(VehicleDetailsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleDetailsOrThrow = await ctx.prisma.vehicleDetails.findFirstOrThrow(input);
      return findFirstVehicleDetailsOrThrow;
    }),
  findManyVehicleDetails: shieldedProcedure
    .input(VehicleDetailsFindManySchema).query(async ({ ctx, input }) => {
      const findManyVehicleDetails = await ctx.prisma.vehicleDetails.findMany(input);
      return findManyVehicleDetails;
    }),
  findUniqueVehicleDetails: shieldedProcedure
    .input(VehicleDetailsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleDetails = await ctx.prisma.vehicleDetails.findUnique(input);
      return findUniqueVehicleDetails;
    }),
  findUniqueVehicleDetailsOrThrow: shieldedProcedure
    .input(VehicleDetailsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleDetailsOrThrow = await ctx.prisma.vehicleDetails.findUniqueOrThrow(input);
      return findUniqueVehicleDetailsOrThrow;
    }),
  groupByVehicleDetails: shieldedProcedure
    .input(VehicleDetailsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVehicleDetails = await ctx.prisma.vehicleDetails.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVehicleDetails;
    }),
  updateManyVehicleDetails: shieldedProcedure
    .input(VehicleDetailsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVehicleDetails = await ctx.prisma.vehicleDetails.updateMany(input);
      return updateManyVehicleDetails;
    }),
  updateOneVehicleDetails: shieldedProcedure
    .input(VehicleDetailsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVehicleDetails = await ctx.prisma.vehicleDetails.update(input);
      return updateOneVehicleDetails;
    }),
  upsertOneVehicleDetails: shieldedProcedure
    .input(VehicleDetailsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVehicleDetails = await ctx.prisma.vehicleDetails.upsert(input);
      return upsertOneVehicleDetails;
    }),

}) 
