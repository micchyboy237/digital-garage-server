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
  })

  it("should login a user", async () => {
    await request(app)
      .post("/trpc/user.register")
      .send({
        input: {
          email: "login@example.com",
          password: "password123",
        },
      })

    const response = await request(app)
      .post("/trpc/user.login")
      .send({
        input: {
          email: "login@example.com",
          password: "password123",
        },
      })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("accessToken")
    expect(response.body).toHaveProperty("refreshToken")

    const { accessToken, refreshToken } = response.body

    // Test refresh token
    const refreshResponse = await request(app).post("/trpc/user.refreshToken").send({
      input: {
        refreshToken,
      },
    })

    expect(refreshResponse.status).toBe(200)
    expect(refreshResponse.body).toHaveProperty("accessToken")
  })
})
