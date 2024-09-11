import type { AppRouter } from "@boilerplate/api"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  createTRPCQueryUtils,
  createTRPCReact,
  httpLink,
  inferReactQueryProcedureOptions,
} from "@trpc/react-query"
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server"
import { ApiResponse, ApisauceInstance, create } from "apisauce"
import { rootStore, RootStore } from "app/models"
import { navigationRef } from "app/navigators"
import { trpcLink } from "app/services/api/trpcLink"
import * as storage from "app/utils/storage"
import React from "react"
import superjson from "superjson"
import Config from "../../config"
import type { EpisodeSnapshotIn } from "../../models/episode/Episode"
import type { ApiConfig, ApiFeedResponse } from "./api.types"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem"

export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>
export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>

export const trpc = createTRPCReact<AppRouter>()

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async getEpisodes(): Promise<{ kind: "ok"; episodes: EpisodeSnapshotIn[] } | GeneralApiProblem> {
    const response: ApiResponse<ApiFeedResponse> = await this.apisauce.get(
      `api.json?rss_url=https%3A%2F%2Ffeeds.simplecast.com%2FhEI_f9Dx`,
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      const rawData = response.data
      const episodes: EpisodeSnapshotIn[] =
        rawData?.items.map((raw) => ({
          ...raw,
        })) ?? []

      return { kind: "ok", episodes }
    } catch (e) {
      if (__DEV__ && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
}

export const api = new Api()

export const queryClient = new QueryClient()

const customLink = trpcLink({
  onQuerySuccess: ({ op, result, elapsedMs }) => {
    console.log(`Query Success!\nPath: "${op.path}"\nTime taken: ${elapsedMs}ms`)
    console.log("Data:", JSON.stringify(result, null, 2))
  },
  onMutationSuccess: ({ op, result, elapsedMs }) => {
    console.log(`Mutation Success!\nPath: "${op.path}"\nTime taken: ${elapsedMs}ms`)
    console.log("Data:", JSON.stringify(result, null, 2))
  },
  onError: ({ op, result, elapsedMs }) => {
    console.error(`Error occurred!\nPath: "${op.path}"\nTime taken: ${elapsedMs}ms`)
    console.error("Result:", result)
    if (!result || result.code === "UNAUTHORIZED") {
      console.log("Logging out due to unauthorized request")
      storage.clear()
      navigationRef.reset({
        index: 0,
        routes: [{ name: "Login" }],
      })
    }
  },
})

export const createTrpcClient = (rootStore: RootStore) =>
  trpc.createClient({
    links: [
      customLink,
      httpLink({
        transformer: {
          input: superjson,
          output: superjson,
          serialize: superjson.serialize,
          deserialize: superjson.deserialize,
        },
        url: Config.API_TRPC_URL,
        headers: async () => {
          const token = rootStore.authenticationStore.authSession?.token
          if (!token) {
            return {}
          }
          return {
            Authorization: token ? "Bearer " + token : "",
          }
        },
      }),
    ],
  })

const trpcClient = createTrpcClient(rootStore)
export const clientUtils = createTRPCQueryUtils({ queryClient, client: trpcClient })

export function TRPCProvider(props: { children: React.ReactNode }) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </trpc.Provider>
  )
}
