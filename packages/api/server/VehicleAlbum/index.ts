import express, { RequestHandler } from "express"
import { ParsedQs } from "qs"
import { VehicleAlbumFindFirst } from "./VehicleAlbumFindFirst"
import { VehicleAlbumFindMany } from "./VehicleAlbumFindMany"
import { VehicleAlbumFindUnique } from "./VehicleAlbumFindUnique"
import { VehicleAlbumCreate } from "./VehicleAlbumCreate"
import { VehicleAlbumCreateMany } from "./VehicleAlbumCreateMany"
import { VehicleAlbumUpdate } from "./VehicleAlbumUpdate"
import { VehicleAlbumUpdateMany } from "./VehicleAlbumUpdateMany"
import { VehicleAlbumUpsert } from "./VehicleAlbumUpsert"
import { VehicleAlbumDelete } from "./VehicleAlbumDelete"
import { VehicleAlbumDeleteMany } from "./VehicleAlbumDeleteMany"
import { VehicleAlbumAggregate } from "./VehicleAlbumAggregate"
import { VehicleAlbumCount } from "./VehicleAlbumCount"
import { VehicleAlbumGroupBy } from "./VehicleAlbumGroupBy"
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
 * Generates an Express router for VehicleAlbum model.
 * @param config Contains optional middleware to enable routes.
 * @param customUrlPrefix Optional custom URL prefix for the routes.
 * @returns {express.Router}
 */
export function VehicleAlbumRouter(config: RouteConfig<RequestHandler>) {
  const router = express.Router()
  const basePath = (config.customUrlPrefix || "") + (config.addModelPrefix ? "/vehiclealbum" : "")

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
    setupRoute("/first", "get", before, VehicleAlbumFindFirst as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/first", ...after)
    }
  }

  if (config.enableAll || config?.findMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.findMany || defaultBeforeAfter
    setupRoute("/", "get", before, VehicleAlbumFindMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.findUnique) {
    const { before = [], after = [], inputValidator, outputValidator } = config.findUnique || defaultBeforeAfter
    setupRoute("/:id", "get", before, VehicleAlbumFindUnique as any, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/:id", ...after)
    }
  }

  if (config.enableAll || config?.create) {
    const { before = [], after = [], inputValidator, outputValidator } = config.create || defaultBeforeAfter
    setupRoute("/", "post", before, VehicleAlbumCreate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.createMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.createMany || defaultBeforeAfter
    setupRoute("/many", "post", before, VehicleAlbumCreateMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.update) {
    const { before = [], after = [], inputValidator, outputValidator } = config.update || defaultBeforeAfter
    setupRoute("/", "put", before, VehicleAlbumUpdate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.updateMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.updateMany || defaultBeforeAfter
    setupRoute("/many", "put", before, VehicleAlbumUpdateMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.upsert) {
    const { before = [], after = [], inputValidator, outputValidator } = config.upsert || defaultBeforeAfter
    setupRoute("/", "patch", before, VehicleAlbumUpsert as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.delete) {
    const { before = [], after = [], inputValidator, outputValidator } = config.delete || defaultBeforeAfter
    setupRoute("/", "delete", before, VehicleAlbumDelete as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.deleteMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.deleteMany || defaultBeforeAfter
    setupRoute("/many", "delete", before, VehicleAlbumDeleteMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.aggregate) {
    const { before = [], after = [], inputValidator, outputValidator } = config.aggregate || defaultBeforeAfter
    setupRoute("/aggregate", "get", before, VehicleAlbumAggregate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/aggregate", ...after)
    }
  }

  if (config.enableAll || config?.count) {
    const { before = [], after = [], inputValidator, outputValidator } = config.count || defaultBeforeAfter
    setupRoute("/count", "get", before, VehicleAlbumCount as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/count", ...after)
    }
  }

  if (config.enableAll || config?.groupBy) {
    const { before = [], after = [], inputValidator, outputValidator } = config.groupBy || defaultBeforeAfter
    setupRoute("/groupby", "get", before, VehicleAlbumGroupBy as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/groupby", ...after)
    }
  }

  return router
}
