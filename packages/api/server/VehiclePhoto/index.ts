import express, { RequestHandler } from "express"
import { ParsedQs } from "qs"
import { VehiclePhotoFindFirst } from "./VehiclePhotoFindFirst"
import { VehiclePhotoFindMany } from "./VehiclePhotoFindMany"
import { VehiclePhotoFindUnique } from "./VehiclePhotoFindUnique"
import { VehiclePhotoCreate } from "./VehiclePhotoCreate"
import { VehiclePhotoCreateMany } from "./VehiclePhotoCreateMany"
import { VehiclePhotoUpdate } from "./VehiclePhotoUpdate"
import { VehiclePhotoUpdateMany } from "./VehiclePhotoUpdateMany"
import { VehiclePhotoUpsert } from "./VehiclePhotoUpsert"
import { VehiclePhotoDelete } from "./VehiclePhotoDelete"
import { VehiclePhotoDeleteMany } from "./VehiclePhotoDeleteMany"
import { VehiclePhotoAggregate } from "./VehiclePhotoAggregate"
import { VehiclePhotoCount } from "./VehiclePhotoCount"
import { VehiclePhotoGroupBy } from "./VehiclePhotoGroupBy"
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
 * Generates an Express router for VehiclePhoto model.
 * @param config Contains optional middleware to enable routes.
 * @param customUrlPrefix Optional custom URL prefix for the routes.
 * @returns {express.Router}
 */
export function VehiclePhotoRouter(config: RouteConfig<RequestHandler>) {
  const router = express.Router()
  const basePath = (config.customUrlPrefix || "") + (config.addModelPrefix ? "/vehiclephoto" : "")

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
    setupRoute("/first", "get", before, VehiclePhotoFindFirst as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/first", ...after)
    }
  }

  if (config.enableAll || config?.findMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.findMany || defaultBeforeAfter
    setupRoute("/", "get", before, VehiclePhotoFindMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.findUnique) {
    const { before = [], after = [], inputValidator, outputValidator } = config.findUnique || defaultBeforeAfter
    setupRoute("/:id", "get", before, VehiclePhotoFindUnique as any, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/:id", ...after)
    }
  }

  if (config.enableAll || config?.create) {
    const { before = [], after = [], inputValidator, outputValidator } = config.create || defaultBeforeAfter
    setupRoute("/", "post", before, VehiclePhotoCreate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.createMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.createMany || defaultBeforeAfter
    setupRoute("/many", "post", before, VehiclePhotoCreateMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.update) {
    const { before = [], after = [], inputValidator, outputValidator } = config.update || defaultBeforeAfter
    setupRoute("/", "put", before, VehiclePhotoUpdate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.updateMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.updateMany || defaultBeforeAfter
    setupRoute("/many", "put", before, VehiclePhotoUpdateMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.upsert) {
    const { before = [], after = [], inputValidator, outputValidator } = config.upsert || defaultBeforeAfter
    setupRoute("/", "patch", before, VehiclePhotoUpsert as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.delete) {
    const { before = [], after = [], inputValidator, outputValidator } = config.delete || defaultBeforeAfter
    setupRoute("/", "delete", before, VehiclePhotoDelete as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/", ...after)
    }
  }

  if (config.enableAll || config?.deleteMany) {
    const { before = [], after = [], inputValidator, outputValidator } = config.deleteMany || defaultBeforeAfter
    setupRoute("/many", "delete", before, VehiclePhotoDeleteMany as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/many", ...after)
    }
  }

  if (config.enableAll || config?.aggregate) {
    const { before = [], after = [], inputValidator, outputValidator } = config.aggregate || defaultBeforeAfter
    setupRoute("/aggregate", "get", before, VehiclePhotoAggregate as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/aggregate", ...after)
    }
  }

  if (config.enableAll || config?.count) {
    const { before = [], after = [], inputValidator, outputValidator } = config.count || defaultBeforeAfter
    setupRoute("/count", "get", before, VehiclePhotoCount as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/count", ...after)
    }
  }

  if (config.enableAll || config?.groupBy) {
    const { before = [], after = [], inputValidator, outputValidator } = config.groupBy || defaultBeforeAfter
    setupRoute("/groupby", "get", before, VehiclePhotoGroupBy as RequestHandler, inputValidator, outputValidator)
    if (after.length) {
      router.use(basePath + "/groupby", ...after)
    }
  }

  return router
}
