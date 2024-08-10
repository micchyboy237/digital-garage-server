import { t, shieldedProcedure } from "./helpers/createRouter";
import { AuthAggregateSchema } from "../schemas/aggregateAuth.schema";
import { AuthCreateManySchema } from "../schemas/createManyAuth.schema";
import { AuthCreateOneSchema } from "../schemas/createOneAuth.schema";
import { AuthDeleteManySchema } from "../schemas/deleteManyAuth.schema";
import { AuthDeleteOneSchema } from "../schemas/deleteOneAuth.schema";
import { AuthFindFirstSchema } from "../schemas/findFirstAuth.schema";
import { AuthFindManySchema } from "../schemas/findManyAuth.schema";
import { AuthFindUniqueSchema } from "../schemas/findUniqueAuth.schema";
import { AuthGroupBySchema } from "../schemas/groupByAuth.schema";
import { AuthUpdateManySchema } from "../schemas/updateManyAuth.schema";
import { AuthUpdateOneSchema } from "../schemas/updateOneAuth.schema";
import { AuthUpsertSchema } from "../schemas/upsertOneAuth.schema";

export const authsRouter = t.router({
  aggregateAuth: shieldedProcedure
    .input(AuthAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateAuth = await ctx.prisma.auth.aggregate(input);
      return aggregateAuth;
    }),
  createManyAuth: shieldedProcedure
    .input(AuthCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyAuth = await ctx.prisma.auth.createMany(input);
      return createManyAuth;
    }),
  createOneAuth: shieldedProcedure
    .input(AuthCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneAuth = await ctx.prisma.auth.create(input);
      return createOneAuth;
    }),
  deleteManyAuth: shieldedProcedure
    .input(AuthDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyAuth = await ctx.prisma.auth.deleteMany(input);
      return deleteManyAuth;
    }),
  deleteOneAuth: shieldedProcedure
    .input(AuthDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneAuth = await ctx.prisma.auth.delete(input);
      return deleteOneAuth;
    }),
  findFirstAuth: shieldedProcedure
    .input(AuthFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAuth = await ctx.prisma.auth.findFirst(input);
      return findFirstAuth;
    }),
  findFirstAuthOrThrow: shieldedProcedure
    .input(AuthFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAuthOrThrow = await ctx.prisma.auth.findFirstOrThrow(input);
      return findFirstAuthOrThrow;
    }),
  findManyAuth: shieldedProcedure
    .input(AuthFindManySchema).query(async ({ ctx, input }) => {
      const findManyAuth = await ctx.prisma.auth.findMany(input);
      return findManyAuth;
    }),
  findUniqueAuth: shieldedProcedure
    .input(AuthFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAuth = await ctx.prisma.auth.findUnique(input);
      return findUniqueAuth;
    }),
  findUniqueAuthOrThrow: shieldedProcedure
    .input(AuthFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAuthOrThrow = await ctx.prisma.auth.findUniqueOrThrow(input);
      return findUniqueAuthOrThrow;
    }),
  groupByAuth: shieldedProcedure
    .input(AuthGroupBySchema).query(async ({ ctx, input }) => {
      const groupByAuth = await ctx.prisma.auth.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAuth;
    }),
  updateManyAuth: shieldedProcedure
    .input(AuthUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyAuth = await ctx.prisma.auth.updateMany(input);
      return updateManyAuth;
    }),
  updateOneAuth: shieldedProcedure
    .input(AuthUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneAuth = await ctx.prisma.auth.update(input);
      return updateOneAuth;
    }),
  upsertOneAuth: shieldedProcedure
    .input(AuthUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneAuth = await ctx.prisma.auth.upsert(input);
      return upsertOneAuth;
    }),

}) 
