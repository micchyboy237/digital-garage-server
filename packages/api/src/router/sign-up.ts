import express, { Request, Response } from "express"
import { checkEmail, signUpUser, verifyEmail } from "../services/sign-up"

const router = express.Router()

// Sign up user
router.post("/signup", async (req: Request, res: Response) => {
  const { email, password, confirmPassword } = req.body as { email: string; password: string; confirmPassword: string }

  try {
    const message = await signUpUser(email, password, confirmPassword)
    res.status(201).send({ message })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

// Verify email
router.post("/verify-email", async (req: Request, res: Response) => {
  const { email, code } = req.body as { email: string; code: string }

  try {
    const token = await verifyEmail(email, code)
    res.status(200).send({ message: "Email verified", token })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

// Duplicate email check
router.post("/check-email", async (req: Request, res: Response) => {
  const { email } = req.body as { email: string }

  try {
    const message = await checkEmail(email)
    res.status(200).send({ message })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

export default router
