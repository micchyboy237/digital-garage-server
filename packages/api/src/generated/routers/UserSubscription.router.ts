import { t, shieldedProcedure } from "./helpers/createRouter";
import { UserSubscriptionAggregateSchema } from "../schemas/aggregateUserSubscription.schema";
import { UserSubscriptionCreateManySchema } from "../schemas/createManyUserSubscription.schema";
import { UserSubscriptionCreateOneSchema } from "../schemas/createOneUserSubscription.schema";
import { UserSubscriptionDeleteManySchema } from "../schemas/deleteManyUserSubscription.schema";
import { UserSubscriptionDeleteOneSchema } from "../schemas/deleteOneUserSubscription.schema";
import { UserSubscriptionFindFirstSchema } from "../schemas/findFirstUserSubscription.schema";
import { UserSubscriptionFindManySchema } from "../schemas/findManyUserSubscription.schema";
import { UserSubscriptionFindUniqueSchema } from "../schemas/findUniqueUserSubscription.schema";
import { UserSubscriptionGroupBySchema } from "../schemas/groupByUserSubscription.schema";
import { UserSubscriptionUpdateManySchema } from "../schemas/updateManyUserSubscription.schema";
import { UserSubscriptionUpdateOneSchema } from "../schemas/updateOneUserSubscription.schema";
import { UserSubscriptionUpsertSchema } from "../schemas/upsertOneUserSubscription.schema";

export const usersubscriptionsRouter = t.router({
  aggregateUserSubscription: shieldedProcedure
    .input(UserSubscriptionAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateUserSubscription = await ctx.prisma.userSubscription.aggregate(input);
      return aggregateUserSubscription;
    }),
  createManyUserSubscription: shieldedProcedure
    .input(UserSubscriptionCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyUserSubscription = await ctx.prisma.userSubscription.createMany(input);
      return createManyUserSubscription;
    }),
  createOneUserSubscription: shieldedProcedure
    .input(UserSubscriptionCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneUserSubscription = await ctx.prisma.userSubscription.create(input);
      return createOneUserSubscription;
    }),
  deleteManyUserSubscription: shieldedProcedure
    .input(UserSubscriptionDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyUserSubscription = await ctx.prisma.userSubscription.deleteMany(input);
      return deleteManyUserSubscription;
    }),
  deleteOneUserSubscription: shieldedProcedure
    .input(UserSubscriptionDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneUserSubscription = await ctx.prisma.userSubscription.delete(input);
      return deleteOneUserSubscription;
    }),
  findFirstUserSubscription: shieldedProcedure
    .input(UserSubscriptionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstUserSubscription = await ctx.prisma.userSubscription.findFirst(input);
      return findFirstUserSubscription;
    }),
  findFirstUserSubscriptionOrThrow: shieldedProcedure
    .input(UserSubscriptionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstUserSubscriptionOrThrow = await ctx.prisma.userSubscription.findFirstOrThrow(input);
      return findFirstUserSubscriptionOrThrow;
    }),
  findManyUserSubscription: shieldedProcedure
    .input(UserSubscriptionFindManySchema).query(async ({ ctx, input }) => {
      const findManyUserSubscription = await ctx.prisma.userSubscription.findMany(input);
      return findManyUserSubscription;
    }),
  findUniqueUserSubscription: shieldedProcedure
    .input(UserSubscriptionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueUserSubscription = await ctx.prisma.userSubscription.findUnique(input);
      return findUniqueUserSubscription;
    }),
  findUniqueUserSubscriptionOrThrow: shieldedProcedure
    .input(UserSubscriptionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueUserSubscriptionOrThrow = await ctx.prisma.userSubscription.findUniqueOrThrow(input);
      return findUniqueUserSubscriptionOrThrow;
    }),
  groupByUserSubscription: shieldedProcedure
    .input(UserSubscriptionGroupBySchema).query(async ({ ctx, input }) => {
      const groupByUserSubscription = await ctx.prisma.userSubscription.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByUserSubscription;
    }),
  updateManyUserSubscription: shieldedProcedure
    .input(UserSubscriptionUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyUserSubscription = await ctx.prisma.userSubscription.updateMany(input);
      return updateManyUserSubscription;
    }),
  updateOneUserSubscription: shieldedProcedure
    .input(UserSubscriptionUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneUserSubscription = await ctx.prisma.userSubscription.update(input);
      return updateOneUserSubscription;
    }),
  upsertOneUserSubscription: shieldedProcedure
    .input(UserSubscriptionUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneUserSubscription = await ctx.prisma.userSubscription.upsert(input);
      return upsertOneUserSubscription;
    }),

}) 
