import Link from "next/link";
import type { PostMeta } from "@/lib/types";

export default function PostPreviewCard({ post }: { post: PostMeta }) {
  return (
    <article className="card">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      {/* next/link's <Link> does client-side navigation instead of a
          full page reload — the Next.js equivalent of a plain <a> tag
          for internal routes. */}
      <Link className="card-link" href={`/aurafarm-blog/${post.slug}`}>
        Read post →
      </Link>
    </article>
  );
}
