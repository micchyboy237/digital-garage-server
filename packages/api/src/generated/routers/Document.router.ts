import { t, shieldedProcedure } from "./helpers/createRouter";
import { DocumentAggregateSchema } from "../schemas/aggregateDocument.schema";
import { DocumentCreateManySchema } from "../schemas/createManyDocument.schema";
import { DocumentCreateOneSchema } from "../schemas/createOneDocument.schema";
import { DocumentDeleteManySchema } from "../schemas/deleteManyDocument.schema";
import { DocumentDeleteOneSchema } from "../schemas/deleteOneDocument.schema";
import { DocumentFindFirstSchema } from "../schemas/findFirstDocument.schema";
import { DocumentFindManySchema } from "../schemas/findManyDocument.schema";
import { DocumentFindUniqueSchema } from "../schemas/findUniqueDocument.schema";
import { DocumentGroupBySchema } from "../schemas/groupByDocument.schema";
import { DocumentUpdateManySchema } from "../schemas/updateManyDocument.schema";
import { DocumentUpdateOneSchema } from "../schemas/updateOneDocument.schema";
import { DocumentUpsertSchema } from "../schemas/upsertOneDocument.schema";

export const documentsRouter = t.router({
  aggregateDocument: shieldedProcedure
    .input(DocumentAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateDocument = await ctx.prisma.document.aggregate(input);
      return aggregateDocument;
    }),
  createManyDocument: shieldedProcedure
    .input(DocumentCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyDocument = await ctx.prisma.document.createMany(input);
      return createManyDocument;
    }),
  createOneDocument: shieldedProcedure
    .input(DocumentCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneDocument = await ctx.prisma.document.create(input);
      return createOneDocument;
    }),
  deleteManyDocument: shieldedProcedure
    .input(DocumentDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyDocument = await ctx.prisma.document.deleteMany(input);
      return deleteManyDocument;
    }),
  deleteOneDocument: shieldedProcedure
    .input(DocumentDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneDocument = await ctx.prisma.document.delete(input);
      return deleteOneDocument;
    }),
  findFirstDocument: shieldedProcedure
    .input(DocumentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDocument = await ctx.prisma.document.findFirst(input);
      return findFirstDocument;
    }),
  findFirstDocumentOrThrow: shieldedProcedure
    .input(DocumentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDocumentOrThrow = await ctx.prisma.document.findFirstOrThrow(input);
      return findFirstDocumentOrThrow;
    }),
  findManyDocument: shieldedProcedure
    .input(DocumentFindManySchema).query(async ({ ctx, input }) => {
      const findManyDocument = await ctx.prisma.document.findMany(input);
      return findManyDocument;
    }),
  findUniqueDocument: shieldedProcedure
    .input(DocumentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDocument = await ctx.prisma.document.findUnique(input);
      return findUniqueDocument;
    }),
  findUniqueDocumentOrThrow: shieldedProcedure
    .input(DocumentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDocumentOrThrow = await ctx.prisma.document.findUniqueOrThrow(input);
      return findUniqueDocumentOrThrow;
    }),
  groupByDocument: shieldedProcedure
    .input(DocumentGroupBySchema).query(async ({ ctx, input }) => {
      const groupByDocument = await ctx.prisma.document.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDocument;
    }),
  updateManyDocument: shieldedProcedure
    .input(DocumentUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyDocument = await ctx.prisma.document.updateMany(input);
      return updateManyDocument;
    }),
  updateOneDocument: shieldedProcedure
    .input(DocumentUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneDocument = await ctx.prisma.document.update(input);
      return updateOneDocument;
    }),
  upsertOneDocument: shieldedProcedure
    .input(DocumentUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneDocument = await ctx.prisma.document.upsert(input);
      return upsertOneDocument;
    }),

}) 
