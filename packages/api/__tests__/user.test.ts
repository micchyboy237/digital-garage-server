import { prisma } from "@boilerplate/database"
import request from "supertest"
import { app } from "../server"

describe("User Registration Endpoint", () => {
  it("should register a new user", async () => {
    const response = await request(app)
      .post("/trpc/user.register")
      .send({
        input: {
          email: "test@example.com",
          password: "password123",
        },
      })

    expect(response.status).toBe(200)
  })

  it("should fail to register an existing user", async () => {
    await request(app)
      .post("/trpc/user.register")
      .send({
        input: {
          email: "test@example.com",
          password: "password123",
        },
      })

    const response = await request(app)
      .post("/trpc/user.register")
      .send({
        input: {
          email: "test@example.com",
          password: "password123",
        },
      })

    expect(response.status).toBe(400)
  })

  it("should verify email", async () => {
    const {
      body: { user },
    } = await request(app)
      .post("/trpc/user.register")
      .send({
        input: {
          email: "verify@example.com",
          password: "password123",
        },
      })

    const authRecord = await prisma.auth.findUnique({
      where: { userId: user.id },
      select: { emailVerificationCode: true },
    })

    const response = await request(app)
      .post("/trpc/user.verifyEmail")
      .send({
        input: {
          emailVerificationCode: authRecord?.emailVerificationCode,
        },
      })

    expect(response.status).toBe(200)
    expect(response.body.message).toBe("Email verified successfully")
  })
})
