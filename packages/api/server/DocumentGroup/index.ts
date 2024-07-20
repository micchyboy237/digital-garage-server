import express, { RequestHandler } from "express"
import { ParsedQs } from "qs"
import { DocumentGroupFindFirst } from "./DocumentGroupFindFirst"
import { DocumentGroupFindMany } from "./DocumentGroupFindMany"
import { DocumentGroupFindUnique } from "./DocumentGroupFindUnique"
import { DocumentGroupCreate } from "./DocumentGroupCreate"
import { DocumentGroupCreateMany } from "./DocumentGroupCreateMany"
import { DocumentGroupUpdate } from "./DocumentGroupUpdate"
import { DocumentGroupUpdateMany } from "./DocumentGroupUpdateMany"
import { DocumentGroupUpsert } from "./DocumentGroupUpsert"
import { DocumentGroupDelete } from "./DocumentGroupDelete"
import { DocumentGroupDeleteMany } from "./DocumentGroupDeleteMany"
import { DocumentGroupAggregate } from "./DocumentGroupAggregate"
import { DocumentGroupCount } from "./DocumentGroupCount"
import { DocumentGroupGroupBy } from "./DocumentGroupGroupBy"
import { createValidatorMiddleware } from "../createValidatorMiddleware"
import { RouteConfig, ValidatorConfig } from "../routeConfig"
import { parseQueryParams } from "../parseQueryParams"

const defaultBeforeAfter = {
  before: [] as RequestHandler[],
  after: [] as RequestHandler[],
  inputValidator: undefined,
  outputValidator: undefined,
}

/**
 * Generates an Express router for DocumentGroup model.
 * @param config Contains optional middleware to enable routes.
 * @param customUrlPrefix Optional custom URL prefix for the routes.
 * @returns {express.Router}
 */
export function DocumentGroupRouter(config: RouteConfig<RequestHandler>) {
  const router = express.Router()
  const basePath = (config.customUrlPrefix || "") + (config.addModelPrefix ? "/documentgroup" : "")

  const setupRoute = (
    path: string,
    method: "all" | "get" | "post" | "put" | "delete" | "patch" | "options" | "head",
    middlewares: RequestHandler[],
    handler: RequestHandler,
    inputValidator?: ValidatorConfig,
    outputValidator?: ValidatorConfig,
  ) => {
    const middlewaresWithValidators: RequestHandler[] = [
      (req, res, next) => {
        if (req.query) {
          req.query = parseQueryParams(req.query as Record<string, string>) as ParsedQs
        }
        next()
      },
      ...middlewares,
    ]

    if (inputValidator) {
      middlewaresWithValidators.push(
        createValidatorMiddleware({
          schema: inputValidator.schema,
          allowedPaths: inputValidator.allow,
          forbiddenPaths: inputValidator.forbid,
          target: method === "get" ? "query" : "body",
        }),
      )
    }

    middlewaresWithValidators.push((req, res, next) => {
      res.locals.outputValidator = outputValidator
      next()
    })

    middlewaresWithValidators.push(handler)

    router[method](basePath + path, ...middlewaresWithValidators)
  }

  if (config.enableAll || config?.findFirst) {
    const { before = [], after = [], inputValidator, outputValidator } = config.findFirst || defaultBeforeAfter
    setupRoute("/first", "get", before, DocumentGroupFindFirst as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/first", ...after)
    }
  }

  if (config.enableAll || config?.findMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.findMany || defaultBeforeAfter
    setupRoute("/", "get", before, DocumentGroupFindMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.findUnique) {
    const { before = [], after = [], inputValidator, outputValidator } = config.findUnique || defaultBeforeAfter
    setupRoute("/:id", "get", before, DocumentGroupFindUnique as any, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/:id", ...after)
    }
  }

  if (config.enableAll || config?.create) {
    const { before = [], after = [], inputValidator, outputValidator } = config.create || defaultBeforeAfter
    setupRoute("/", "post", before, DocumentGroupCreate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.createMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.createMany || defaultBeforeAfter
    setupRoute("/many", "post", before, DocumentGroupCreateMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.update) {
    const { before = [], after = [], inputValidator, outputValidator } = config.update || defaultBeforeAfter
    setupRoute("/", "put", before, DocumentGroupUpdate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.updateMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.updateMany || defaultBeforeAfter
    setupRoute("/many", "put", before, DocumentGroupUpdateMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.upsert) {
    const { before = [], after = [], inputValidator, outputValidator } = config.upsert || defaultBeforeAfter
    setupRoute("/", "patch", before, DocumentGroupUpsert as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.delete) {
    const { before = [], after = [], inputValidator, outputValidator } = config.delete || defaultBeforeAfter
    setupRoute("/", "delete", before, DocumentGroupDelete as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.deleteMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.deleteMany || defaultBeforeAfter
    setupRoute("/many", "delete", before, DocumentGroupDeleteMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.aggregate) {
    const { before = [], after = [], inputValidator, outputValidator } = config.aggregate || defaultBeforeAfter
    setupRoute("/aggregate", "get", before, DocumentGroupAggregate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/aggregate", ...after)
    }
  }

  if (config.enableAll || config?.count) {
    const { before = [], after = [], inputValidator, outputValidator } = config.count || defaultBeforeAfter
    setupRoute("/count", "get", before, DocumentGroupCount as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/count", ...after)
    }
  }

  if (config.enableAll || config?.groupBy) {
    const { before = [], after = [], inputValidator, outputValidator } = config.groupBy || defaultBeforeAfter
    setupRoute("/groupby", "get", before, DocumentGroupGroupBy as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/groupby", ...after)
    }
  }

  return router
}
