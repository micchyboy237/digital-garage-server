import { prisma } from "@boilerplate/database"
import { SubscriptionStatus } from "@prisma/client"
import express, { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

const router = express.Router()

// Extend Express Request type
interface AuthenticatedRequest extends Request {
  user?: { id: string }
}

// Middleware to verify JWT token and get user ID
const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1]
  if (!token) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET_KEY as string, (err: any, user: any) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

// View subscription options
router.get("/subscriptions", async (req: Request, res: Response) => {
  try {
    const subscriptions = await prisma.subscription.findMany()
    res.status(200).json(subscriptions)
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch subscription options" })
  }
})

// Select a subscription
router.post("/select-subscription", authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  const { subscriptionId } = req.body as { subscriptionId: string }
  const userId = req.user?.id

  if (!userId) {
    return res.status(400).json({ message: "User not authenticated" })
  }

  try {
    const subscription = await prisma.subscription.findUnique({ where: { id: subscriptionId } })
    if (!subscription) {
      return res.status(404).json({ message: "Subscription plan not found" })
    }

    const userSubscription = await prisma.userSubscription.create({
      data: {
        subscriptionId: subscription.id,
        userId,
        status: SubscriptionStatus.active,
        startDate: new Date(),
        endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Example: 1 year subscription
      },
    })

    res.status(201).json({ message: "Subscription selected successfully", userSubscription })
  } catch (error) {
    res.status(500).json({ message: "Failed to select subscription" })
  }
})

// Manage subscription status
router.put("/manage-subscription", authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  const { subscriptionId, status } = req.body as { subscriptionId: string; status: SubscriptionStatus }
  const userId = req.user?.id

  if (!userId) {
    return res.status(400).json({ message: "User not authenticated" })
  }

  try {
    const userSubscription = await prisma.userSubscription.findFirst({
      where: { userId, subscriptionId },
    })

    if (!userSubscription) {
      return res.status(404).json({ message: "Subscription not found" })
    }

    const updatedSubscription = await prisma.userSubscription.update({
      where: { id: userSubscription.id },
      data: { status },
    })

    res.status(200).json({ message: "Subscription status updated", updatedSubscription })
  } catch (error) {
    res.status(500).json({ message: "Failed to update subscription status" })
  }
})

// Endpoint to provide subscription benefits and costs
router.get("/subscription-benefits", async (req: Request, res: Response) => {
  try {
    const benefits = await prisma.subscription.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        currency: true,
        // Add any other fields you have related to benefits
      },
    })
    res.status(200).json(benefits)
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch subscription benefits" })
  }
})

// Endpoint to provide subscription terms and conditions
router.get("/subscription-terms", (req: Request, res: Response) => {
  // Return the subscription terms and conditions document
  return res.sendFile(__dirname + "/subscription-terms-and-conditions.md")
})

export default router
