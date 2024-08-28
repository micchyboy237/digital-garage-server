import { t, shieldedProcedure } from "./helpers/createRouter";
import { ProfileAggregateSchema } from "../schemas/aggregateProfile.schema";
import { ProfileCreateManySchema } from "../schemas/createManyProfile.schema";
import { ProfileCreateOneSchema } from "../schemas/createOneProfile.schema";
import { ProfileDeleteManySchema } from "../schemas/deleteManyProfile.schema";
import { ProfileDeleteOneSchema } from "../schemas/deleteOneProfile.schema";
import { ProfileFindFirstSchema } from "../schemas/findFirstProfile.schema";
import { ProfileFindManySchema } from "../schemas/findManyProfile.schema";
import { ProfileFindUniqueSchema } from "../schemas/findUniqueProfile.schema";
import { ProfileGroupBySchema } from "../schemas/groupByProfile.schema";
import { ProfileUpdateManySchema } from "../schemas/updateManyProfile.schema";
import { ProfileUpdateOneSchema } from "../schemas/updateOneProfile.schema";
import { ProfileUpsertSchema } from "../schemas/upsertOneProfile.schema";

export const profilesRouter = t.router({
  aggregateProfile: shieldedProcedure
    .input(ProfileAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateProfile = await ctx.prisma.profile.aggregate(input);
      return aggregateProfile;
    }),
  createManyProfile: shieldedProcedure
    .input(ProfileCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyProfile = await ctx.prisma.profile.createMany(input);
      return createManyProfile;
    }),
  createOneProfile: shieldedProcedure
    .input(ProfileCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneProfile = await ctx.prisma.profile.create(input);
      return createOneProfile;
    }),
  deleteManyProfile: shieldedProcedure
    .input(ProfileDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyProfile = await ctx.prisma.profile.deleteMany(input);
      return deleteManyProfile;
    }),
  deleteOneProfile: shieldedProcedure
    .input(ProfileDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneProfile = await ctx.prisma.profile.delete(input);
      return deleteOneProfile;
    }),
  findFirstProfile: shieldedProcedure
    .input(ProfileFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProfile = await ctx.prisma.profile.findFirst(input);
      return findFirstProfile;
    }),
  findFirstProfileOrThrow: shieldedProcedure
    .input(ProfileFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProfileOrThrow = await ctx.prisma.profile.findFirstOrThrow(input);
      return findFirstProfileOrThrow;
    }),
  findManyProfile: shieldedProcedure
    .input(ProfileFindManySchema).query(async ({ ctx, input }) => {
      const findManyProfile = await ctx.prisma.profile.findMany(input);
      return findManyProfile;
    }),
  findUniqueProfile: shieldedProcedure
    .input(ProfileFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProfile = await ctx.prisma.profile.findUnique(input);
      return findUniqueProfile;
    }),
  findUniqueProfileOrThrow: shieldedProcedure
    .input(ProfileFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProfileOrThrow = await ctx.prisma.profile.findUniqueOrThrow(input);
      return findUniqueProfileOrThrow;
    }),
  groupByProfile: shieldedProcedure
    .input(ProfileGroupBySchema).query(async ({ ctx, input }) => {
      const groupByProfile = await ctx.prisma.profile.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByProfile;
    }),
  updateManyProfile: shieldedProcedure
    .input(ProfileUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyProfile = await ctx.prisma.profile.updateMany(input);
      return updateManyProfile;
    }),
  updateOneProfile: shieldedProcedure
    .input(ProfileUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneProfile = await ctx.prisma.profile.update(input);
      return updateOneProfile;
    }),
  upsertOneProfile: shieldedProcedure
    .input(ProfileUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneProfile = await ctx.prisma.profile.upsert(input);
      return upsertOneProfile;
    }),

}) 
