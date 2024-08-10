import { initTRPC } from "@trpc/server"
import { z, ZodObject, ZodTypeAny } from "zod"
import { Context } from "../context"
import { appRouter as generatedRouters } from "../generated/routers"
import { authRouter } from "./auth.route"
import { userRouter } from "./user.route"

const t = initTRPC.context<Context>().create()

const nestAttributes = (flatAttributes: Record<string, string>): Record<string, any> => {
  const nestedAttributes: Record<string, any> = {}

  Object.keys(flatAttributes).forEach((key) => {
    const keys = key.split(".")
    keys.reduce((acc, part, index) => {
      if (index === keys.length - 1) {
        acc[part] = flatAttributes[key]
      } else {
        acc[part] = acc[part] || {}
      }
      return acc[part]
    }, nestedAttributes)
  })

  return nestedAttributes
}

function getTypeName(schema: ZodTypeAny): string {
  if (schema instanceof z.ZodString) return "string"
  if (schema instanceof z.ZodNumber) return "number"
  if (schema instanceof z.ZodBoolean) return "boolean"
  if (schema instanceof z.ZodDate) return "Date"
  if (schema instanceof z.ZodArray) return `${getTypeName(schema._def.type)}[]`
  if (schema instanceof z.ZodObject) return "object"
  if (schema instanceof z.ZodUnion) return schema._def.options.map(getTypeName).join(" | ")
  if (schema instanceof z.ZodLiteral) return `${schema._def.value}`
  if (schema instanceof z.ZodEnum) return schema._def.values.join(" | ")
  if (schema instanceof z.ZodNullable) return `${getTypeName(schema._def.innerType)} | null`
  if (schema instanceof z.ZodOptional) return `${getTypeName(schema._def.innerType)} | undefined`
  if (schema instanceof z.ZodEffects) return getTypeName(schema._def.schema)
  return "unknown"
}

const userSchemaAttributes = (schema: ZodTypeAny, prefix = ""): Record<string, string> => {
  let attributes: Record<string, string> = {}

  if (schema instanceof z.ZodObject) {
    const shape = schema._def.shape()
    for (const key in shape) {
      if (["AND", "OR", "NOT"].includes(key)) continue
      const value = shape[key]
      const nestedAttributes = userSchemaAttributes(value, `${prefix}${key}.`)
      attributes = { ...attributes, ...nestedAttributes }
    }
  } else if (schema instanceof z.ZodOptional || schema instanceof z.ZodNullable) {
    attributes = { ...attributes, ...userSchemaAttributes(schema._def.innerType, prefix) }
  } else {
    attributes[prefix.slice(0, -1)] = getTypeName(schema)
  }

  return attributes
}

const removeUnknownIfSpecificExists = (attributes: Record<string, string>): Record<string, string> => {
  const cleanedAttributes: Record<string, string> = {}

  Object.entries(attributes).forEach(([key, value]) => {
    if (value.includes("unknown | ")) {
      cleanedAttributes[key] = value.replace("unknown | ", "")
    } else if (value.includes(" | unknown")) {
      cleanedAttributes[key] = value.replace(" | unknown", "")
    } else {
      cleanedAttributes[key] = value
    }
  })

  return cleanedAttributes
}

type Input = Record<string, any>

type Relationship = {
  name: string
  type: string
}

type LogRoute = {
  key: string
  type: "query" | "mutation"
  inputs: Input
  relationships?: Relationship[]
}

const logRoutes = (router, prefix = ""): LogRoute[] => {
  const routes: LogRoute[] = []
  if (!router._def.procedures) {
    return routes
  }

  Object.keys(router._def.procedures).forEach((key) => {
    const procedure = router._def.procedures[key]
    let flatInputs =
      procedure._def.inputs?.reduce(
        (acc, input) => {
          if (input instanceof ZodObject) {
            const parsedObject = userSchemaAttributes(input)
            acc = { ...acc, ...parsedObject }
          } else {
            acc = { ...acc, [key]: getTypeName(input) }
          }
          return acc
        },
        {} as Record<string, string>,
      ) || {}

    flatInputs = removeUnknownIfSpecificExists(flatInputs)

    const nestedInputs = nestAttributes(flatInputs)

    const relationships = []
    procedure._def.inputs?.forEach((input) => {
      if (input instanceof ZodObject) {
        relationships.push(...extractRelationships(input))
      }
    })

    routes.push({
      key: `${prefix}${key}`,
      type: procedure._def.query ? "query" : "mutation",
      inputs: nestedInputs,
      relationships,
    })
  })

  return routes
}

const extractRelationships = (schema: ZodObject<any>): Relationship[] => {
  const relationships: Relationship[] = []
  const shape = schema._def.shape()
  for (const key in shape) {
    const value = shape[key]
    if (value instanceof ZodObject) {
      relationships.push({ name: key, type: value._def.typeName })
      relationships.push(...extractRelationships(value))
    } else if (value instanceof z.ZodArray && value._def.type instanceof ZodObject) {
      relationships.push({ name: key, type: value._def.type._def.typeName })
      relationships.push(...extractRelationships(value._def.type))
    }
  }
  return relationships
}

// Create a procedure to return the list of all routes
const metaRouter = t.router({
  getRoutes: t.procedure.query(() => {
    const generatedRoutes = logRoutes(generatedRouters)
    return generatedRoutes
  }),
})

const otherRouters = t.router({
  oldAuth: authRouter,
  oldUser: userRouter,
  meta: metaRouter,
})

export const appRouter = t.mergeRouters(generatedRouters, otherRouters)

export type AppRouter = typeof appRouter
