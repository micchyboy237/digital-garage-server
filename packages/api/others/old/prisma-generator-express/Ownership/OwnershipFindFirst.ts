import type { Prisma, Ownership } from "../../../../../database/node_modules/@prisma/client"
import type { PrismaClient } from "../../../../../database/node_modules/@prisma/client"

import { Request, Response, NextFunction } from "express"
import { RequestHandler, ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"
import { ZodTypeAny } from "zod"

export interface FindFirstRequest extends Request {
  prisma: PrismaClient
  query: Prisma.OwnershipFindFirstArgs & ParsedQs
  outputValidation?: ZodTypeAny
  passToNext?: boolean
  locals?: {
    data?: Ownership | null
    outputValidator?: ZodTypeAny
  }
}
export type FindFirstMiddleware = RequestHandler<
  ParamsDictionary,
  any,
  any,
  Prisma.OwnershipFindFirstArgs & ParsedQs,
  Record<string, any>
>

export async function OwnershipFindFirst(req: FindFirstRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = req.locals?.outputValidator || req.outputValidation

    const data = await req.prisma.ownership.findFirst(req.query as Prisma.OwnershipFindFirstArgs)
    if (req.passToNext) {
      if (req.locals) req.locals.data = data
      next()
    } else if (outputValidator) {
      const validationResult = outputValidator.safeParse(data)
      if (validationResult.success) {
        return res.status(200).json(validationResult.data)
      } else {
        return res.status(400).json({ error: "Invalid data format", details: validationResult.error })
      }
    } else {
      return res.status(200).json(data)
    }
  } catch (error: unknown) {
    next(error)
  }
}
