import { TRPCError } from "@trpc/server"
import { z } from "zod"
import { UserCreateInputObjectSchema, UserWhereUniqueInputObjectSchema } from "../generated/schemas"
// import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"
import { protectedProcedure, t } from "../trpc"

const userIdSchema = z.object({
  id: z.string().uuid(),
})

export const userRouter = t.router({
  getUserData: protectedProcedure.input(UserWhereUniqueInputObjectSchema).query(async ({ input, ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: { id: input.id },
    })
    if (!user) {
      throw new TRPCError({ code: "NOT_FOUND", message: "User not found" })
    }
    return user
  }),
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany()
    return users
  }),
  createUser: protectedProcedure.input(UserCreateInputObjectSchema).mutation(async ({ input, ctx }) => {
    const newUser = await ctx.prisma.user.create({
      data: input,
    })
    return newUser
  }),
  updateUser: protectedProcedure.input(UserCreateInputObjectSchema).mutation(async ({ input, ctx }) => {
    const updatedUser = await ctx.prisma.user.update({
      where: { id: input.id },
      data: input,
    })
    return updatedUser
  }),
  deleteUser: protectedProcedure.input(userIdSchema).mutation(async ({ input, ctx }) => {
    await ctx.prisma.user.delete({
      where: { id: input.id },
    })
    return { success: true }
  }),
})
