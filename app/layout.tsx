import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

// next/font downloads and self-hosts these fonts at build time —
// no external <link> tags needed (which is how Phase 1 loaded
// fonts), and it avoids the page-load flash of fallback text.
// Each one is exposed as a CSS variable with the same name
// globals.css already expects (--font-display, --font-mono, --font-body).
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "6yinyang — software engineer",
  description: "aura emanating from 6yinyang, a software engineer.",
};

// Every page in app/ renders as `children` here. This is the one
// place Nav and Footer are written — compare to the Phase 1 version,
// where that markup was copy-pasted at the top/bottom of every file.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexMono.variable} ${inter.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
