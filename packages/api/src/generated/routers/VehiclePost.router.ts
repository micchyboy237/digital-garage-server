import { t, shieldedProcedure } from "./helpers/createRouter";
import { VehiclePostAggregateSchema } from "../schemas/aggregateVehiclePost.schema";
import { VehiclePostCreateManySchema } from "../schemas/createManyVehiclePost.schema";
import { VehiclePostCreateOneSchema } from "../schemas/createOneVehiclePost.schema";
import { VehiclePostDeleteManySchema } from "../schemas/deleteManyVehiclePost.schema";
import { VehiclePostDeleteOneSchema } from "../schemas/deleteOneVehiclePost.schema";
import { VehiclePostFindFirstSchema } from "../schemas/findFirstVehiclePost.schema";
import { VehiclePostFindManySchema } from "../schemas/findManyVehiclePost.schema";
import { VehiclePostFindUniqueSchema } from "../schemas/findUniqueVehiclePost.schema";
import { VehiclePostGroupBySchema } from "../schemas/groupByVehiclePost.schema";
import { VehiclePostUpdateManySchema } from "../schemas/updateManyVehiclePost.schema";
import { VehiclePostUpdateOneSchema } from "../schemas/updateOneVehiclePost.schema";
import { VehiclePostUpsertSchema } from "../schemas/upsertOneVehiclePost.schema";

export const vehiclepostsRouter = t.router({
  aggregateVehiclePost: shieldedProcedure
    .input(VehiclePostAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVehiclePost = await ctx.prisma.vehiclePost.aggregate(input);
      return aggregateVehiclePost;
    }),
  createManyVehiclePost: shieldedProcedure
    .input(VehiclePostCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyVehiclePost = await ctx.prisma.vehiclePost.createMany(input);
      return createManyVehiclePost;
    }),
  createOneVehiclePost: shieldedProcedure
    .input(VehiclePostCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVehiclePost = await ctx.prisma.vehiclePost.create(input);
      return createOneVehiclePost;
    }),
  deleteManyVehiclePost: shieldedProcedure
    .input(VehiclePostDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVehiclePost = await ctx.prisma.vehiclePost.deleteMany(input);
      return deleteManyVehiclePost;
    }),
  deleteOneVehiclePost: shieldedProcedure
    .input(VehiclePostDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVehiclePost = await ctx.prisma.vehiclePost.delete(input);
      return deleteOneVehiclePost;
    }),
  findFirstVehiclePost: shieldedProcedure
    .input(VehiclePostFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehiclePost = await ctx.prisma.vehiclePost.findFirst(input);
      return findFirstVehiclePost;
    }),
  findFirstVehiclePostOrThrow: shieldedProcedure
    .input(VehiclePostFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehiclePostOrThrow = await ctx.prisma.vehiclePost.findFirstOrThrow(input);
      return findFirstVehiclePostOrThrow;
    }),
  findManyVehiclePost: shieldedProcedure
    .input(VehiclePostFindManySchema).query(async ({ ctx, input }) => {
      const findManyVehiclePost = await ctx.prisma.vehiclePost.findMany(input);
      return findManyVehiclePost;
    }),
  findUniqueVehiclePost: shieldedProcedure
    .input(VehiclePostFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehiclePost = await ctx.prisma.vehiclePost.findUnique(input);
      return findUniqueVehiclePost;
    }),
  findUniqueVehiclePostOrThrow: shieldedProcedure
    .input(VehiclePostFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehiclePostOrThrow = await ctx.prisma.vehiclePost.findUniqueOrThrow(input);
      return findUniqueVehiclePostOrThrow;
    }),
  groupByVehiclePost: shieldedProcedure
    .input(VehiclePostGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVehiclePost = await ctx.prisma.vehiclePost.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVehiclePost;
    }),
  updateManyVehiclePost: shieldedProcedure
    .input(VehiclePostUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVehiclePost = await ctx.prisma.vehiclePost.updateMany(input);
      return updateManyVehiclePost;
    }),
  updateOneVehiclePost: shieldedProcedure
    .input(VehiclePostUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVehiclePost = await ctx.prisma.vehiclePost.update(input);
      return updateOneVehiclePost;
    }),
  upsertOneVehiclePost: shieldedProcedure
    .input(VehiclePostUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVehiclePost = await ctx.prisma.vehiclePost.upsert(input);
      return upsertOneVehiclePost;
    }),

}) 
