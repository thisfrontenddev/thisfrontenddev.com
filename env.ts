import { z } from "zod"

const envSchema = z.object({
  GHOST_API_URL: z.string().min(1),
  GHOST_CONTENT_API_KEY: z.string().min(1),
})

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

export const env = envSchema.parse(process.env)
