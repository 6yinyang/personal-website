import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "aura",
  description: "hype",
};

export default function WritingIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="section wrap" style={{ borderBottom: "none", paddingBottom: 0 }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>AURAFARM</h1>
        <p style={{ maxWidth: "max-content" }}>Where I post absolute AURA 🔥🔥 and sometimes shower thoughts or something idk mmmmmm</p>
      </section>

      <section className="wrap" style={{ paddingBottom: "4rem" }}>
        {posts.map((post) => (
          <div key={post.slug} className="post-row">
            <h3>
              <Link href={`/aurafarm-blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <span className="post-date">{post.date}</span>
          </div>
        ))}
      </section>
    </>
  );
}
