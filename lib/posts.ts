import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Post, PostMeta } from "@/lib/types";

// Every blog post is a .md file living here. Adding a new post is
// just adding a new file — no new page to hand-write, unlike the
// Phase 1 version where each post was its own copy-pasted HTML file.
const postsDirectory = path.join(process.cwd(), "content/posts");

// Returns every post's metadata, newest first. Used on the homepage
// preview and the /writing index — neither needs the full body.
export function getAllPosts(): PostMeta[] {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // gray-matter splits the "---" frontmatter block from the
      // markdown body. `data` holds the parsed frontmatter fields.
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Returns one post's full data, with the markdown body converted
// to an HTML string. Used by the individual post page.
export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const contentHtml = marked.parse(content) as string;

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    contentHtml,
  };
}

// Lists every post's slug (filename without .md) — used by
// generateStaticParams so Next.js knows which /writing/[slug]
// pages exist and can build them ahead of time.
export function getAllSlugs(): string[] {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}
