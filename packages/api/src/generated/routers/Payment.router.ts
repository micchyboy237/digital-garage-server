import { t, shieldedProcedure } from "./helpers/createRouter";
import { PaymentAggregateSchema } from "../schemas/aggregatePayment.schema";
import { PaymentCreateManySchema } from "../schemas/createManyPayment.schema";
import { PaymentCreateOneSchema } from "../schemas/createOnePayment.schema";
import { PaymentDeleteManySchema } from "../schemas/deleteManyPayment.schema";
import { PaymentDeleteOneSchema } from "../schemas/deleteOnePayment.schema";
import { PaymentFindFirstSchema } from "../schemas/findFirstPayment.schema";
import { PaymentFindManySchema } from "../schemas/findManyPayment.schema";
import { PaymentFindUniqueSchema } from "../schemas/findUniquePayment.schema";
import { PaymentGroupBySchema } from "../schemas/groupByPayment.schema";
import { PaymentUpdateManySchema } from "../schemas/updateManyPayment.schema";
import { PaymentUpdateOneSchema } from "../schemas/updateOnePayment.schema";
import { PaymentUpsertSchema } from "../schemas/upsertOnePayment.schema";

export const paymentsRouter = t.router({
  aggregatePayment: shieldedProcedure
    .input(PaymentAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePayment = await ctx.prisma.payment.aggregate(input);
      return aggregatePayment;
    }),
  createManyPayment: shieldedProcedure
    .input(PaymentCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPayment = await ctx.prisma.payment.createMany(input);
      return createManyPayment;
    }),
  createOnePayment: shieldedProcedure
    .input(PaymentCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePayment = await ctx.prisma.payment.create(input);
      return createOnePayment;
    }),
  deleteManyPayment: shieldedProcedure
    .input(PaymentDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPayment = await ctx.prisma.payment.deleteMany(input);
      return deleteManyPayment;
    }),
  deleteOnePayment: shieldedProcedure
    .input(PaymentDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePayment = await ctx.prisma.payment.delete(input);
      return deleteOnePayment;
    }),
  findFirstPayment: shieldedProcedure
    .input(PaymentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPayment = await ctx.prisma.payment.findFirst(input);
      return findFirstPayment;
    }),
  findFirstPaymentOrThrow: shieldedProcedure
    .input(PaymentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPaymentOrThrow = await ctx.prisma.payment.findFirstOrThrow(input);
      return findFirstPaymentOrThrow;
    }),
  findManyPayment: shieldedProcedure
    .input(PaymentFindManySchema).query(async ({ ctx, input }) => {
      const findManyPayment = await ctx.prisma.payment.findMany(input);
      return findManyPayment;
    }),
  findUniquePayment: shieldedProcedure
    .input(PaymentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePayment = await ctx.prisma.payment.findUnique(input);
      return findUniquePayment;
    }),
  findUniquePaymentOrThrow: shieldedProcedure
    .input(PaymentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePaymentOrThrow = await ctx.prisma.payment.findUniqueOrThrow(input);
      return findUniquePaymentOrThrow;
    }),
  groupByPayment: shieldedProcedure
    .input(PaymentGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPayment = await ctx.prisma.payment.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPayment;
    }),
  updateManyPayment: shieldedProcedure
    .input(PaymentUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPayment = await ctx.prisma.payment.updateMany(input);
      return updateManyPayment;
    }),
  updateOnePayment: shieldedProcedure
    .input(PaymentUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePayment = await ctx.prisma.payment.update(input);
      return updateOnePayment;
    }),
  upsertOnePayment: shieldedProcedure
    .input(PaymentUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePayment = await ctx.prisma.payment.upsert(input);
      return upsertOnePayment;
    }),

}) 
