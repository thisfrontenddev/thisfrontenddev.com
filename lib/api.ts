import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY = path.join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(POSTS_DIRECTORY);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/(\.md|\.mdx)$/, "");
  const fullPath = path.join(POSTS_DIRECTORY, `${slug}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = Record<string, string>;

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
      console.log("items[field]", items[field], realSlug);
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
