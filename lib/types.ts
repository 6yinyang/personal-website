// Shared shapes used across the site. Defining these once means
// TypeScript will flag it at compile time if a component tries to
// use a Project or Post incorrectly, instead of failing silently
// in the browser the way plain JS would.

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

// Metadata only — used anywhere you're listing posts (homepage
// preview, the /writing index) without needing the full body.
export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

// Full post, including the rendered HTML body — used on the
// individual post page.
export interface Post extends PostMeta {
  contentHtml: string;
}
