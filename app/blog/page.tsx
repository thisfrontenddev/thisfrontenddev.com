import { getPosts } from "@/dto/posts"
import Link from "next/link"

export default async function BlogPage() {
  // const posts: Array<{ id: number; slug: string; title: string }> = []
  const posts = await getPosts()

  return (
    <div>
      <h1 className="text-6xl font-bold">Blog</h1>
      <ul>
        {!posts && "No posts found."}
        {!!posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
// export const config = { runtime: "nodejs" }
