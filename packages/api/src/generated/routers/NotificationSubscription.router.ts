import { t, shieldedProcedure } from "./helpers/createRouter";
import { NotificationSubscriptionAggregateSchema } from "../schemas/aggregateNotificationSubscription.schema";
import { NotificationSubscriptionCreateManySchema } from "../schemas/createManyNotificationSubscription.schema";
import { NotificationSubscriptionCreateOneSchema } from "../schemas/createOneNotificationSubscription.schema";
import { NotificationSubscriptionDeleteManySchema } from "../schemas/deleteManyNotificationSubscription.schema";
import { NotificationSubscriptionDeleteOneSchema } from "../schemas/deleteOneNotificationSubscription.schema";
import { NotificationSubscriptionFindFirstSchema } from "../schemas/findFirstNotificationSubscription.schema";
import { NotificationSubscriptionFindManySchema } from "../schemas/findManyNotificationSubscription.schema";
import { NotificationSubscriptionFindUniqueSchema } from "../schemas/findUniqueNotificationSubscription.schema";
import { NotificationSubscriptionGroupBySchema } from "../schemas/groupByNotificationSubscription.schema";
import { NotificationSubscriptionUpdateManySchema } from "../schemas/updateManyNotificationSubscription.schema";
import { NotificationSubscriptionUpdateOneSchema } from "../schemas/updateOneNotificationSubscription.schema";
import { NotificationSubscriptionUpsertSchema } from "../schemas/upsertOneNotificationSubscription.schema";

export const notificationsubscriptionsRouter = t.router({
  aggregateNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateNotificationSubscription = await ctx.prisma.notificationSubscription.aggregate(input);
      return aggregateNotificationSubscription;
    }),
  createManyNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyNotificationSubscription = await ctx.prisma.notificationSubscription.createMany(input);
      return createManyNotificationSubscription;
    }),
  createOneNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneNotificationSubscription = await ctx.prisma.notificationSubscription.create(input);
      return createOneNotificationSubscription;
    }),
  deleteManyNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyNotificationSubscription = await ctx.prisma.notificationSubscription.deleteMany(input);
      return deleteManyNotificationSubscription;
    }),
  deleteOneNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneNotificationSubscription = await ctx.prisma.notificationSubscription.delete(input);
      return deleteOneNotificationSubscription;
    }),
  findFirstNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstNotificationSubscription = await ctx.prisma.notificationSubscription.findFirst(input);
      return findFirstNotificationSubscription;
    }),
  findFirstNotificationSubscriptionOrThrow: shieldedProcedure
    .input(NotificationSubscriptionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstNotificationSubscriptionOrThrow = await ctx.prisma.notificationSubscription.findFirstOrThrow(input);
      return findFirstNotificationSubscriptionOrThrow;
    }),
  findManyNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionFindManySchema).query(async ({ ctx, input }) => {
      const findManyNotificationSubscription = await ctx.prisma.notificationSubscription.findMany(input);
      return findManyNotificationSubscription;
    }),
  findUniqueNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueNotificationSubscription = await ctx.prisma.notificationSubscription.findUnique(input);
      return findUniqueNotificationSubscription;
    }),
  findUniqueNotificationSubscriptionOrThrow: shieldedProcedure
    .input(NotificationSubscriptionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueNotificationSubscriptionOrThrow = await ctx.prisma.notificationSubscription.findUniqueOrThrow(input);
      return findUniqueNotificationSubscriptionOrThrow;
    }),
  groupByNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionGroupBySchema).query(async ({ ctx, input }) => {
      const groupByNotificationSubscription = await ctx.prisma.notificationSubscription.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByNotificationSubscription;
    }),
  updateManyNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyNotificationSubscription = await ctx.prisma.notificationSubscription.updateMany(input);
      return updateManyNotificationSubscription;
    }),
  updateOneNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneNotificationSubscription = await ctx.prisma.notificationSubscription.update(input);
      return updateOneNotificationSubscription;
    }),
  upsertOneNotificationSubscription: shieldedProcedure
    .input(NotificationSubscriptionUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneNotificationSubscription = await ctx.prisma.notificationSubscription.upsert(input);
      return upsertOneNotificationSubscription;
    }),

}) 
