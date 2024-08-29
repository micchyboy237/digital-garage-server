import { t, shieldedProcedure } from "./helpers/createRouter";
import { OwnershipAggregateSchema } from "../schemas/aggregateOwnership.schema";
import { OwnershipCreateManySchema } from "../schemas/createManyOwnership.schema";
import { OwnershipCreateOneSchema } from "../schemas/createOneOwnership.schema";
import { OwnershipDeleteManySchema } from "../schemas/deleteManyOwnership.schema";
import { OwnershipDeleteOneSchema } from "../schemas/deleteOneOwnership.schema";
import { OwnershipFindFirstSchema } from "../schemas/findFirstOwnership.schema";
import { OwnershipFindManySchema } from "../schemas/findManyOwnership.schema";
import { OwnershipFindUniqueSchema } from "../schemas/findUniqueOwnership.schema";
import { OwnershipGroupBySchema } from "../schemas/groupByOwnership.schema";
import { OwnershipUpdateManySchema } from "../schemas/updateManyOwnership.schema";
import { OwnershipUpdateOneSchema } from "../schemas/updateOneOwnership.schema";
import { OwnershipUpsertSchema } from "../schemas/upsertOneOwnership.schema";

export const ownershipsRouter = t.router({
  aggregateOwnership: shieldedProcedure
    .input(OwnershipAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateOwnership = await ctx.prisma.ownership.aggregate(input);
      return aggregateOwnership;
    }),
  createManyOwnership: shieldedProcedure
    .input(OwnershipCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyOwnership = await ctx.prisma.ownership.createMany(input);
      return createManyOwnership;
    }),
  createOneOwnership: shieldedProcedure
    .input(OwnershipCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneOwnership = await ctx.prisma.ownership.create(input);
      return createOneOwnership;
    }),
  deleteManyOwnership: shieldedProcedure
    .input(OwnershipDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyOwnership = await ctx.prisma.ownership.deleteMany(input);
      return deleteManyOwnership;
    }),
  deleteOneOwnership: shieldedProcedure
    .input(OwnershipDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneOwnership = await ctx.prisma.ownership.delete(input);
      return deleteOneOwnership;
    }),
  findFirstOwnership: shieldedProcedure
    .input(OwnershipFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstOwnership = await ctx.prisma.ownership.findFirst(input);
      return findFirstOwnership;
    }),
  findFirstOwnershipOrThrow: shieldedProcedure
    .input(OwnershipFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstOwnershipOrThrow = await ctx.prisma.ownership.findFirstOrThrow(input);
      return findFirstOwnershipOrThrow;
    }),
  findManyOwnership: shieldedProcedure
    .input(OwnershipFindManySchema).query(async ({ ctx, input }) => {
      const findManyOwnership = await ctx.prisma.ownership.findMany(input);
      return findManyOwnership;
    }),
  findUniqueOwnership: shieldedProcedure
    .input(OwnershipFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueOwnership = await ctx.prisma.ownership.findUnique(input);
      return findUniqueOwnership;
    }),
  findUniqueOwnershipOrThrow: shieldedProcedure
    .input(OwnershipFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueOwnershipOrThrow = await ctx.prisma.ownership.findUniqueOrThrow(input);
      return findUniqueOwnershipOrThrow;
    }),
  groupByOwnership: shieldedProcedure
    .input(OwnershipGroupBySchema).query(async ({ ctx, input }) => {
      const groupByOwnership = await ctx.prisma.ownership.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByOwnership;
    }),
  updateManyOwnership: shieldedProcedure
    .input(OwnershipUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyOwnership = await ctx.prisma.ownership.updateMany(input);
      return updateManyOwnership;
    }),
  updateOneOwnership: shieldedProcedure
    .input(OwnershipUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneOwnership = await ctx.prisma.ownership.update(input);
      return updateOneOwnership;
    }),
  upsertOneOwnership: shieldedProcedure
    .input(OwnershipUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneOwnership = await ctx.prisma.ownership.upsert(input);
      return upsertOneOwnership;
    }),

}) 
