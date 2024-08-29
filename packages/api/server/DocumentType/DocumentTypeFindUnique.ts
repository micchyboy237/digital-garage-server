import type { Prisma, DocumentType } from "../../../database/node_modules/@prisma/client"
import type { PrismaClient } from "../../../database/node_modules/@prisma/client"

import { Request, Response, NextFunction } from "express"
import { RequestHandler, ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"
import { ZodTypeAny } from "zod"

export interface FindUniqueRequest extends Request {
  prisma: PrismaClient
  query: Prisma.DocumentTypeFindUniqueArgs & ParsedQs
  outputValidation?: ZodTypeAny
  passToNext?: boolean
  locals?: {
    data?: DocumentType | null
    outputValidator?: ZodTypeAny
  }
}
export type FindUniqueMiddleware = RequestHandler<
  ParamsDictionary,
  any,
  any,
  Prisma.DocumentTypeFindUniqueArgs & ParsedQs,
  Record<string, any>
>

export async function DocumentTypeFindUnique(req: FindUniqueRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = req.locals?.outputValidator || req.outputValidation

    const data = await req.prisma.documentType.findUnique(req.query as Prisma.DocumentTypeFindUniqueArgs)
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
