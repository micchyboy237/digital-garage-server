import { t, shieldedProcedure } from "./helpers/createRouter";
import { MediaFileAggregateSchema } from "../schemas/aggregateMediaFile.schema";
import { MediaFileCreateManySchema } from "../schemas/createManyMediaFile.schema";
import { MediaFileCreateOneSchema } from "../schemas/createOneMediaFile.schema";
import { MediaFileDeleteManySchema } from "../schemas/deleteManyMediaFile.schema";
import { MediaFileDeleteOneSchema } from "../schemas/deleteOneMediaFile.schema";
import { MediaFileFindFirstSchema } from "../schemas/findFirstMediaFile.schema";
import { MediaFileFindManySchema } from "../schemas/findManyMediaFile.schema";
import { MediaFileFindUniqueSchema } from "../schemas/findUniqueMediaFile.schema";
import { MediaFileGroupBySchema } from "../schemas/groupByMediaFile.schema";
import { MediaFileUpdateManySchema } from "../schemas/updateManyMediaFile.schema";
import { MediaFileUpdateOneSchema } from "../schemas/updateOneMediaFile.schema";
import { MediaFileUpsertSchema } from "../schemas/upsertOneMediaFile.schema";

export const mediafilesRouter = t.router({
  aggregateMediaFile: shieldedProcedure
    .input(MediaFileAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateMediaFile = await ctx.prisma.mediaFile.aggregate(input);
      return aggregateMediaFile;
    }),
  createManyMediaFile: shieldedProcedure
    .input(MediaFileCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyMediaFile = await ctx.prisma.mediaFile.createMany(input);
      return createManyMediaFile;
    }),
  createOneMediaFile: shieldedProcedure
    .input(MediaFileCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneMediaFile = await ctx.prisma.mediaFile.create(input);
      return createOneMediaFile;
    }),
  deleteManyMediaFile: shieldedProcedure
    .input(MediaFileDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyMediaFile = await ctx.prisma.mediaFile.deleteMany(input);
      return deleteManyMediaFile;
    }),
  deleteOneMediaFile: shieldedProcedure
    .input(MediaFileDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneMediaFile = await ctx.prisma.mediaFile.delete(input);
      return deleteOneMediaFile;
    }),
  findFirstMediaFile: shieldedProcedure
    .input(MediaFileFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstMediaFile = await ctx.prisma.mediaFile.findFirst(input);
      return findFirstMediaFile;
    }),
  findFirstMediaFileOrThrow: shieldedProcedure
    .input(MediaFileFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstMediaFileOrThrow = await ctx.prisma.mediaFile.findFirstOrThrow(input);
      return findFirstMediaFileOrThrow;
    }),
  findManyMediaFile: shieldedProcedure
    .input(MediaFileFindManySchema).query(async ({ ctx, input }) => {
      const findManyMediaFile = await ctx.prisma.mediaFile.findMany(input);
      return findManyMediaFile;
    }),
  findUniqueMediaFile: shieldedProcedure
    .input(MediaFileFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueMediaFile = await ctx.prisma.mediaFile.findUnique(input);
      return findUniqueMediaFile;
    }),
  findUniqueMediaFileOrThrow: shieldedProcedure
    .input(MediaFileFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueMediaFileOrThrow = await ctx.prisma.mediaFile.findUniqueOrThrow(input);
      return findUniqueMediaFileOrThrow;
    }),
  groupByMediaFile: shieldedProcedure
    .input(MediaFileGroupBySchema).query(async ({ ctx, input }) => {
      const groupByMediaFile = await ctx.prisma.mediaFile.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByMediaFile;
    }),
  updateManyMediaFile: shieldedProcedure
    .input(MediaFileUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyMediaFile = await ctx.prisma.mediaFile.updateMany(input);
      return updateManyMediaFile;
    }),
  updateOneMediaFile: shieldedProcedure
    .input(MediaFileUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneMediaFile = await ctx.prisma.mediaFile.update(input);
      return updateOneMediaFile;
    }),
  upsertOneMediaFile: shieldedProcedure
    .input(MediaFileUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneMediaFile = await ctx.prisma.mediaFile.upsert(input);
      return upsertOneMediaFile;
    }),

}) 
