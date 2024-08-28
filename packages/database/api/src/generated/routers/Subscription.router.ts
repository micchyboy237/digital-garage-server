import { t, shieldedProcedure } from "./helpers/createRouter";
import { SubscriptionAggregateSchema } from "../schemas/aggregateSubscription.schema";
import { SubscriptionCreateManySchema } from "../schemas/createManySubscription.schema";
import { SubscriptionCreateOneSchema } from "../schemas/createOneSubscription.schema";
import { SubscriptionDeleteManySchema } from "../schemas/deleteManySubscription.schema";
import { SubscriptionDeleteOneSchema } from "../schemas/deleteOneSubscription.schema";
import { SubscriptionFindFirstSchema } from "../schemas/findFirstSubscription.schema";
import { SubscriptionFindManySchema } from "../schemas/findManySubscription.schema";
import { SubscriptionFindUniqueSchema } from "../schemas/findUniqueSubscription.schema";
import { SubscriptionGroupBySchema } from "../schemas/groupBySubscription.schema";
import { SubscriptionUpdateManySchema } from "../schemas/updateManySubscription.schema";
import { SubscriptionUpdateOneSchema } from "../schemas/updateOneSubscription.schema";
import { SubscriptionUpsertSchema } from "../schemas/upsertOneSubscription.schema";

export const subscriptionsRouter = t.router({
  aggregateSubscription: shieldedProcedure
    .input(SubscriptionAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSubscription = await ctx.prisma.subscription.aggregate(input);
      return aggregateSubscription;
    }),
  createManySubscription: shieldedProcedure
    .input(SubscriptionCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySubscription = await ctx.prisma.subscription.createMany(input);
      return createManySubscription;
    }),
  createOneSubscription: shieldedProcedure
    .input(SubscriptionCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSubscription = await ctx.prisma.subscription.create(input);
      return createOneSubscription;
    }),
  deleteManySubscription: shieldedProcedure
    .input(SubscriptionDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySubscription = await ctx.prisma.subscription.deleteMany(input);
      return deleteManySubscription;
    }),
  deleteOneSubscription: shieldedProcedure
    .input(SubscriptionDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSubscription = await ctx.prisma.subscription.delete(input);
      return deleteOneSubscription;
    }),
  findFirstSubscription: shieldedProcedure
    .input(SubscriptionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSubscription = await ctx.prisma.subscription.findFirst(input);
      return findFirstSubscription;
    }),
  findFirstSubscriptionOrThrow: shieldedProcedure
    .input(SubscriptionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSubscriptionOrThrow = await ctx.prisma.subscription.findFirstOrThrow(input);
      return findFirstSubscriptionOrThrow;
    }),
  findManySubscription: shieldedProcedure
    .input(SubscriptionFindManySchema).query(async ({ ctx, input }) => {
      const findManySubscription = await ctx.prisma.subscription.findMany(input);
      return findManySubscription;
    }),
  findUniqueSubscription: shieldedProcedure
    .input(SubscriptionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSubscription = await ctx.prisma.subscription.findUnique(input);
      return findUniqueSubscription;
    }),
  findUniqueSubscriptionOrThrow: shieldedProcedure
    .input(SubscriptionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSubscriptionOrThrow = await ctx.prisma.subscription.findUniqueOrThrow(input);
      return findUniqueSubscriptionOrThrow;
    }),
  groupBySubscription: shieldedProcedure
    .input(SubscriptionGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySubscription = await ctx.prisma.subscription.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySubscription;
    }),
  updateManySubscription: shieldedProcedure
    .input(SubscriptionUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySubscription = await ctx.prisma.subscription.updateMany(input);
      return updateManySubscription;
    }),
  updateOneSubscription: shieldedProcedure
    .input(SubscriptionUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSubscription = await ctx.prisma.subscription.update(input);
      return updateOneSubscription;
    }),
  upsertOneSubscription: shieldedProcedure
    .input(SubscriptionUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSubscription = await ctx.prisma.subscription.upsert(input);
      return upsertOneSubscription;
    }),

}) 
