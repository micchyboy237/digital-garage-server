import { t, shieldedProcedure } from "./helpers/createRouter";
import { VehicleDocumentAggregateSchema } from "../schemas/aggregateVehicleDocument.schema";
import { VehicleDocumentCreateManySchema } from "../schemas/createManyVehicleDocument.schema";
import { VehicleDocumentCreateOneSchema } from "../schemas/createOneVehicleDocument.schema";
import { VehicleDocumentDeleteManySchema } from "../schemas/deleteManyVehicleDocument.schema";
import { VehicleDocumentDeleteOneSchema } from "../schemas/deleteOneVehicleDocument.schema";
import { VehicleDocumentFindFirstSchema } from "../schemas/findFirstVehicleDocument.schema";
import { VehicleDocumentFindManySchema } from "../schemas/findManyVehicleDocument.schema";
import { VehicleDocumentFindUniqueSchema } from "../schemas/findUniqueVehicleDocument.schema";
import { VehicleDocumentGroupBySchema } from "../schemas/groupByVehicleDocument.schema";
import { VehicleDocumentUpdateManySchema } from "../schemas/updateManyVehicleDocument.schema";
import { VehicleDocumentUpdateOneSchema } from "../schemas/updateOneVehicleDocument.schema";
import { VehicleDocumentUpsertSchema } from "../schemas/upsertOneVehicleDocument.schema";

export const vehicledocumentsRouter = t.router({
  aggregateVehicleDocument: shieldedProcedure
    .input(VehicleDocumentAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVehicleDocument = await ctx.prisma.vehicleDocument.aggregate(input);
      return aggregateVehicleDocument;
    }),
  createManyVehicleDocument: shieldedProcedure
    .input(VehicleDocumentCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyVehicleDocument = await ctx.prisma.vehicleDocument.createMany(input);
      return createManyVehicleDocument;
    }),
  createOneVehicleDocument: shieldedProcedure
    .input(VehicleDocumentCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVehicleDocument = await ctx.prisma.vehicleDocument.create(input);
      return createOneVehicleDocument;
    }),
  deleteManyVehicleDocument: shieldedProcedure
    .input(VehicleDocumentDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVehicleDocument = await ctx.prisma.vehicleDocument.deleteMany(input);
      return deleteManyVehicleDocument;
    }),
  deleteOneVehicleDocument: shieldedProcedure
    .input(VehicleDocumentDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVehicleDocument = await ctx.prisma.vehicleDocument.delete(input);
      return deleteOneVehicleDocument;
    }),
  findFirstVehicleDocument: shieldedProcedure
    .input(VehicleDocumentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleDocument = await ctx.prisma.vehicleDocument.findFirst(input);
      return findFirstVehicleDocument;
    }),
  findFirstVehicleDocumentOrThrow: shieldedProcedure
    .input(VehicleDocumentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVehicleDocumentOrThrow = await ctx.prisma.vehicleDocument.findFirstOrThrow(input);
      return findFirstVehicleDocumentOrThrow;
    }),
  findManyVehicleDocument: shieldedProcedure
    .input(VehicleDocumentFindManySchema).query(async ({ ctx, input }) => {
      const findManyVehicleDocument = await ctx.prisma.vehicleDocument.findMany(input);
      return findManyVehicleDocument;
    }),
  findUniqueVehicleDocument: shieldedProcedure
    .input(VehicleDocumentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleDocument = await ctx.prisma.vehicleDocument.findUnique(input);
      return findUniqueVehicleDocument;
    }),
  findUniqueVehicleDocumentOrThrow: shieldedProcedure
    .input(VehicleDocumentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVehicleDocumentOrThrow = await ctx.prisma.vehicleDocument.findUniqueOrThrow(input);
      return findUniqueVehicleDocumentOrThrow;
    }),
  groupByVehicleDocument: shieldedProcedure
    .input(VehicleDocumentGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVehicleDocument = await ctx.prisma.vehicleDocument.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVehicleDocument;
    }),
  updateManyVehicleDocument: shieldedProcedure
    .input(VehicleDocumentUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVehicleDocument = await ctx.prisma.vehicleDocument.updateMany(input);
      return updateManyVehicleDocument;
    }),
  updateOneVehicleDocument: shieldedProcedure
    .input(VehicleDocumentUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVehicleDocument = await ctx.prisma.vehicleDocument.update(input);
      return updateOneVehicleDocument;
    }),
  upsertOneVehicleDocument: shieldedProcedure
    .input(VehicleDocumentUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVehicleDocument = await ctx.prisma.vehicleDocument.upsert(input);
      return upsertOneVehicleDocument;
    }),

}) 
