import { getPosts } from "@/dto/posts"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import Link from "next/link"

dayjs.extend(relativeTime)
export default async function BlogPage() {
  const posts = await getPosts()

  if (!posts) {
    return (
      <>
        <h1 className="text-6xl font-bold">Blog</h1>
        <div className="h-12"></div>
        <p>No posts found.</p>
      </>
    )
  }

  return (
    <>
      <h1 className="text-6xl font-bold">Blog</h1>
      <div className="h-12"></div>
      {!posts && "No posts found."}
      {!!posts &&
        posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="inline-block rounded-md w-full px-4 py-6 hover:bg-zinc-900"
          >
            <article>
              <div className="flex items-center">
                <h2 className="flex-grow text-m font-semibold">{post.title}</h2>
                <p className="pl-2 text-zinc-500 text-sm font-medium">
                  {dayjs(post.created_at).fromNow(true)}
                </p>
              </div>
              <p className="pt-1 line-clamp-1 text-zinc-500">
                {post.custom_excerpt || post.excerpt}
              </p>
            </article>
          </Link>
        ))}
    </>
  )
}
