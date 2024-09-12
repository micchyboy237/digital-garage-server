import express, { RequestHandler } from "express"
import { ParsedQs } from "qs"
import { VehicleTransferFindFirst } from "./VehicleTransferFindFirst"
import { VehicleTransferFindMany } from "./VehicleTransferFindMany"
import { VehicleTransferFindUnique } from "./VehicleTransferFindUnique"
import { VehicleTransferCreate } from "./VehicleTransferCreate"
import { VehicleTransferCreateMany } from "./VehicleTransferCreateMany"
import { VehicleTransferUpdate } from "./VehicleTransferUpdate"
import { VehicleTransferUpdateMany } from "./VehicleTransferUpdateMany"
import { VehicleTransferUpsert } from "./VehicleTransferUpsert"
import { VehicleTransferDelete } from "./VehicleTransferDelete"
import { VehicleTransferDeleteMany } from "./VehicleTransferDeleteMany"
import { VehicleTransferAggregate } from "./VehicleTransferAggregate"
import { VehicleTransferCount } from "./VehicleTransferCount"
import { VehicleTransferGroupBy } from "./VehicleTransferGroupBy"
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
 * Generates an Express router for VehicleTransfer model.
 * @param config Contains optional middleware to enable routes.
 * @param customUrlPrefix Optional custom URL prefix for the routes.
 * @returns {express.Router}
 */
export function VehicleTransferRouter(config: RouteConfig<RequestHandler>) {
  const router = express.Router()
  const basePath = (config.customUrlPrefix || "") + (config.addModelPrefix ? "/vehicletransfer" : "")

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
    setupRoute("/first", "get", before, VehicleTransferFindFirst as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/first", ...after)
    }
  }

  if (config.enableAll || config?.findMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.findMany || defaultBeforeAfter
    setupRoute("/", "get", before, VehicleTransferFindMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.findUnique) {
    const { before = [], after = [], inputValidator, outputValidator } = config.findUnique || defaultBeforeAfter
    setupRoute("/:id", "get", before, VehicleTransferFindUnique as any, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/:id", ...after)
    }
  }

  if (config.enableAll || config?.create) {
    const { before = [], after = [], inputValidator, outputValidator } = config.create || defaultBeforeAfter
    setupRoute("/", "post", before, VehicleTransferCreate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.createMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.createMany || defaultBeforeAfter
    setupRoute("/many", "post", before, VehicleTransferCreateMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.update) {
    const { before = [], after = [], inputValidator, outputValidator } = config.update || defaultBeforeAfter
    setupRoute("/", "put", before, VehicleTransferUpdate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.updateMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.updateMany || defaultBeforeAfter
    setupRoute("/many", "put", before, VehicleTransferUpdateMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.upsert) {
    const { before = [], after = [], inputValidator, outputValidator } = config.upsert || defaultBeforeAfter
    setupRoute("/", "patch", before, VehicleTransferUpsert as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.delete) {
    const { before = [], after = [], inputValidator, outputValidator } = config.delete || defaultBeforeAfter
    setupRoute("/", "delete", before, VehicleTransferDelete as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.deleteMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.deleteMany || defaultBeforeAfter
    setupRoute("/many", "delete", before, VehicleTransferDeleteMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.aggregate) {
    const { before = [], after = [], inputValidator, outputValidator } = config.aggregate || defaultBeforeAfter
    setupRoute("/aggregate", "get", before, VehicleTransferAggregate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/aggregate", ...after)
    }
  }

  if (config.enableAll || config?.count) {
    const { before = [], after = [], inputValidator, outputValidator } = config.count || defaultBeforeAfter
    setupRoute("/count", "get", before, VehicleTransferCount as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/count", ...after)
    }
  }

  if (config.enableAll || config?.groupBy) {
    const { before = [], after = [], inputValidator, outputValidator } = config.groupBy || defaultBeforeAfter
    setupRoute("/groupby", "get", before, VehicleTransferGroupBy as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/groupby", ...after)
    }
  }

  return router
}
