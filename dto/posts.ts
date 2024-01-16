import { contentApi } from "@/lib/ghost"

export async function getPosts() {
  try {
    const posts = await contentApi.posts.browse({
      limit: "all",
    })
    console.log("posts", posts)
    return posts
  } catch (error) {
    console.log("this is getPosts error")
    console.error(error)
  }
}
