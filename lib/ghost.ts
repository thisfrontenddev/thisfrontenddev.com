import { env } from "@/env"
import GhostContentAPI from "@tryghost/content-api"

/**
 * Custom makeRequest function to use the Ghost Content API,
 * which has an issue running in a Server Component for Next 14.
 */
async function makeRequest(options: {
  url: string
  method: string
  params: any
  headers: any
}) {
  const { url, method, params, headers: optionsHeaders } = options
  const searchParams = new URLSearchParams(params).toString()
  const headers = new Headers({
    ...optionsHeaders,
  })

  const request = await fetch(`${url}?${searchParams}`, {
    headers,
    method,
  })
  const response = await request.json()

  return {
    data: response,
  }
}

export const contentApi = new GhostContentAPI({
  url: env.GHOST_API_URL,
  key: env.GHOST_CONTENT_API_KEY,
  version: "v5.0",
  // Remove this once DefinitelyTyped/DefinitelyTyped#68233 is fixed
  // @ts-ignore-next-line
  makeRequest,
})
