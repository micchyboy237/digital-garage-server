// __tests__/user.test.ts
import request from "supertest"
import { app } from "../server"

describe("User Registration Endpoint", () => {
  it("should register a new user", async () => {
    const response = await request(app).post("/trpc/user.register").send({
      email: "test@example.com",
      password: "password123",
    })

    expect(response.status).toBe(200)
  })

  it("should fail to register an existing user", async () => {
    await request(app).post("/trpc/user.register").send({
      email: "test@example.com",
      password: "password123",
    })

    const response = await request(app).post("/trpc/user.register").send({
      email: "test@example.com",
      password: "password123",
    })

    expect(response.status).toBe(400)
  })
})
