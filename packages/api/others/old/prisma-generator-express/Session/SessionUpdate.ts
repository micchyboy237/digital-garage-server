
import type { Prisma } from '../../../../../database/node_modules/@prisma/client';
import type { PrismaClient } from '../../../../../database/node_modules/@prisma/client';

import { Request, Response, NextFunction } from 'express';
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core';
import { ZodTypeAny } from 'zod';

interface UpdateRequest extends Request {
  prisma: PrismaClient;
  body: Prisma.SessionUpdateArgs;
  outputValidation?: ZodTypeAny;
  locals?: {
    outputValidator?: ZodTypeAny;
  };
}

export type UpdateMiddleware = RequestHandler<ParamsDictionary, any, Prisma.SessionUpdateArgs, Record<string, any>>

export async function SessionUpdate(req: UpdateRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = req.locals?.outputValidator || req.outputValidation;

    const data = await req.prisma.session.update(req.body);

    if (outputValidator) {
      const validationResult = outputValidator.safeParse(data);
      if (validationResult.success) {
        return res.status(200).json(validationResult.data);
      } else {
        return res.status(400).json({ error: 'Invalid data format', details: validationResult.error });
      }
    } else {
      return res.status(200).json(data);
    }
  } catch(error: unknown) {
    next(error)
  }
}