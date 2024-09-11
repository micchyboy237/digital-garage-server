
import type { Prisma, Account } from '../../../../../database/node_modules/@prisma/client';
import type { PrismaClient } from '../../../../../database/node_modules/@prisma/client';

import { Request, Response, NextFunction } from 'express'
import {
  RequestHandler,
  ParamsDictionary,
} from 'express-serve-static-core' 
import { ParsedQs } from 'qs';
import { ZodTypeAny } from 'zod';

export interface FindFirstRequest extends Request {
  prisma: PrismaClient;
  query: Prisma.AccountFindFirstArgs & ParsedQs;
  outputValidation?: ZodTypeAny;
  passToNext?: boolean;
  locals?: {
    data?: Account | null
    outputValidator?: ZodTypeAny;
  }
}
export type FindFirstMiddleware = RequestHandler<ParamsDictionary, any, any, Prisma.AccountFindFirstArgs & ParsedQs, Record<string, any>>

export async function AccountFindFirst(req: FindFirstRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = req.locals?.outputValidator || req.outputValidation;

    const data = await req.prisma.account.findFirst(req.query as Prisma.AccountFindFirstArgs);
    if (req.passToNext) {
      if (req.locals) req.locals.data = data;
      next();
    } else if (outputValidator) {
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