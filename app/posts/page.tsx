import { getAllPosts } from "@/lib/api";

export default async function Posts() {
  const posts = getAllPosts(["slug", "title", "excerpt"]);
  console.log("posts", posts);
  return (
    <div>
      <h1 className="text-6xl font-bold">Posts</h1>
      <ul className="flex flex-col gap-8 mt-8 list-none">
        {posts.map((post) => (
          <li key={post.slug}>
            <h2 className="text-4xl font-bold">{post.title}</h2>
            <p className="text-carbon-300 dark:text-carbon-400 mt-1">
              {post.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
