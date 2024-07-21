import { prisma } from "@boilerplate/database"
import { handleIOSPayment } from "../utils/payment"

export const getSubscriptionOptions = async (): Promise<any> => {
  // Fetch subscription options from the database or a configuration file
  const options = await prisma.subscription.findMany()
  return options
}

export const chooseSubscription = async (userId: string, subscriptionId: string): Promise<string> => {
  // Assign the chosen subscription to the user
  await prisma.user.update({
    where: { id: userId },
    data: { subscriptionId },
  })

  return "Subscription selected successfully."
}

export const purchaseSubscription = async (userId: string, subscriptionId: string, paymentDetails: any): Promise<string> => {
  // Process payment using the provided payment details
  const paymentResult = await handleIOSPayment(paymentDetails)

  if (!paymentResult.success) {
    throw new Error("Payment failed")
  }

  // Update user subscription upon successful payment
  await prisma.user.update({
    where: { id: userId },
    data: { subscriptionId },
  })

  return "Subscription purchased successfully."
}

export const getSubscriptionDetails = async (subscriptionId: string): Promise<any> => {
  // Fetch subscription details from the database
  const subscription = await prisma.subscription.findUnique({ where: { id: subscriptionId } })
  if (!subscription) {
    throw new Error("Subscription not found")
  }

  return subscription
}

export const getSecurityInfo = (): string => {
  // Return security information for payment processing
  return "Your payment information is secure. We use industry-standard encryption to protect your data."
}

export const getSubscriptionTerms = (): string => {
  // Return terms and conditions for the subscription
  return "By subscribing, you agree to our terms and conditions. You can view the full terms and conditions here: [link to terms and conditions]"
}
