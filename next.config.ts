import type { NextConfig } from "next";

// GitHub Pages serves two kinds of sites:
//   - User site:    repo named <username>.github.io  -> served at the root
//                   (https://<username>.github.io), so basePath stays ""
//   - Project site: any other repo name              -> served under a
//                   subpath (https://<username>.github.io/<repo>), so set
//                   basePath to "/<repo>" (e.g. "/portfolio")
const basePath = "";

const nextConfig: NextConfig = {
  // Makes `next build` write a plain static site to the `out/` folder,
  // which is what GitHub Pages can host. Static export can't use
  // server-only features (API routes, cookies, on-demand rendering) —
  // fine for now; this is a good reason to revisit hosting in Phase 2/3
  // when you add a database and REST API.
  output: "export",
  basePath,
  // Exposes basePath to components, for plain <a href> links to files in
  // /public (next/link and next/image-free pages handle it automatically).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Next's image optimizer needs a server; this turns it off. Harmless
  // now, required if you add next/image later.
  images: { unoptimized: true },
  // Emits /writing/index.html instead of /writing.html — plays nicest
  // with static hosts.
  trailingSlash: true,
};

export default nextConfig;
