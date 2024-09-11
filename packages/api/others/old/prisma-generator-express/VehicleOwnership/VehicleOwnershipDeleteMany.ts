
import type { Prisma } from '../../../../../database/node_modules/@prisma/client';
import type { PrismaClient } from '../../../../../database/node_modules/@prisma/client';

import { Request, Response, NextFunction } from 'express';
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core';
import { ZodTypeAny } from 'zod';

interface DeleteManyRequest extends Request {
  prisma: PrismaClient;
  body: Prisma.VehicleOwnershipDeleteManyArgs;
  outputValidation?: ZodTypeAny;
  locals?: {
    outputValidator?: ZodTypeAny;
  };
}

export type DeleteManyMiddleware = RequestHandler<ParamsDictionary, any, Prisma.VehicleOwnershipDeleteManyArgs, Record<string, any>>;

export async function VehicleOwnershipDeleteMany(req: DeleteManyRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = req.locals?.outputValidator || req.outputValidation;

    const result = await req.prisma.vehicleOwnership.deleteMany(req.body);

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