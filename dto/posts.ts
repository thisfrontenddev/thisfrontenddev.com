import { contentApi } from "@/lib/ghost"

export async function getPosts() {
  try {
    const posts = await contentApi.posts.browse({
      limit: "all",
    })
    return posts
  } catch (error) {
    console.error(error)
  }
}
