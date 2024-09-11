
import type { Prisma } from '../../../../../database/node_modules/@prisma/client';
import type { PrismaClient } from '../../../../../database/node_modules/@prisma/client';

import { Request, Response, NextFunction } from 'express';
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core';
import { ZodTypeAny } from 'zod';

interface UpdateManyRequest extends Request {
  prisma: PrismaClient;
  body: Prisma.UserUpdateManyArgs;
  outputValidation?: ZodTypeAny;
  locals?: {
    outputValidator?: ZodTypeAny;
  };
}

export type UpdateManyMiddleware = RequestHandler<ParamsDictionary, any, Prisma.UserUpdateManyArgs, Record<string, any>>

export async function UserUpdateMany(req: UpdateManyRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = req.locals?.outputValidator || req.outputValidation;

    const data = await req.prisma.user.updateMany(req.body);

    if (outputValidator) {
      const validationResult = outputValidator.safeParse(data);
      if (validationResult.success) {
        return res.status(200).json({ count: validationResult.data.count });
      } else {
        return res.status(400).json({ error: 'Invalid data format', details: validationResult.error });
      }
    } else {
      return res.status(200).json({ count: data.count });
    }
  } catch(error: unknown) {
    next(error)
  }
}