import type { Prisma } from "../../../../database/node_modules/@prisma/client"
import type { PrismaClient } from "../../../../database/node_modules/@prisma/client"

import { Request, Response, NextFunction } from "express"
import { RequestHandler, ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"
import { ZodTypeAny } from "zod"
import { ValidatorConfig } from "../routeConfig"

interface AggregateRequest extends Request {
  prisma: PrismaClient
  query: Partial<Prisma.VehicleAggregateArgs> & ParsedQs
  outputValidation?: ZodTypeAny
  locals?: {
    outputValidator?: ValidatorConfig
  }
}

export type AggregateMiddleware = RequestHandler<ParamsDictionary, any, Partial<Prisma.VehicleAggregateArgs>, Record<string, any>>

export async function VehicleAggregate(req: AggregateRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = res.locals.outputValidator?.schema || req.outputValidation

    const result = await req.prisma.vehicle.aggregate(req.query as Prisma.VehicleAggregateArgs)

    if (outputValidator) {
      const validationResult = outputValidator.safeParse(result)
      if (validationResult.success) {
        return res.status(200).json(validationResult.data)
      } else {
        return res.status(400).json({ error: "Invalid data format", details: validationResult.error })
      }
    } else {
      return res.status(200).json(result)
    }
  } catch (error: unknown) {
    next(error)
  }
}
