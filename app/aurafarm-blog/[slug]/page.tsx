import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

// Tells Next.js which [slug] values exist, so it can generate a
// static page for every post at build time — this is what replaces
// hand-copying hello-world.html for every new post in Phase 1.
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Note: as of current Next.js, route params arrive as a Promise
// and must be awaited — this is a real, fairly recent API change,
// not something you did wrong if older tutorials show it differently.
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <article className="article">
      <Link className="back-link" href="/aurafarm-blog">← All posts</Link>
      <p className="article-meta">{post.date}</p>
      <h1>{post.title}</h1>
      {/* dangerouslySetInnerHTML is React's way of injecting a raw
          HTML string instead of JSX elements — necessary here since
          `marked` already converted the markdown to an HTML string.
          The "dangerous" naming is a deliberate warning: only do this
          with content you trust, since unescaped HTML can enable XSS.
          That's fine here since the content is your own markdown files. */}
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
