import { createExpressMiddleware } from "@trpc/server/adapters/express"
import cors from "cors"
import express from "express"
import { createContext } from "./src/context"
import { appRouter } from "./src/routes"

export const app = express()
app.use(cors())
app.use(express.json())

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
)

const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export type AppRouter = typeof appRouter
