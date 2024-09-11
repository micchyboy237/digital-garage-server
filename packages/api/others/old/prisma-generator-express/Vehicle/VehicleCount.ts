
import type { Prisma } from '../../../../../database/node_modules/@prisma/client';
import type { PrismaClient } from '../../../../../database/node_modules/@prisma/client';

import { Request, Response, NextFunction } from 'express';
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { ZodTypeAny } from 'zod';

interface CountRequest extends Request {
  prisma: PrismaClient;
  query: Partial<Prisma.VehicleCountArgs> & ParsedQs;
  outputValidation?: ZodTypeAny;
  locals?: {
    outputValidator?: ZodTypeAny;
  };
}

export type CountMiddleware = RequestHandler<ParamsDictionary, any, {}, ParsedQs>;

export async function VehicleCount(req: CountRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = req.locals?.outputValidator || req.outputValidation;

    const result = await req.prisma.vehicle.count(req.query as Prisma.VehicleCountArgs);

    if (outputValidator) {
      const validationResult = outputValidator.safeParse(result);
      if (validationResult.success) {
        return res.status(200).json(validationResult.data);
      } else {
        return res.status(400).json({ error: 'Invalid data format', details: validationResult.error });
      }
    } else {
      return res.status(200).json(result);
    }
  } catch(error: unknown) {
    next(error)
  }
}