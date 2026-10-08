// A plain Server Component — no interactivity needed, so no
// "use client" required. This still runs real JavaScript
// (new Date().getFullYear()), it just runs once on the server
// rather than in the visitor's browser.
export default function Footer() {
  return (
    <footer className="footer wrap">
      <p>© {new Date().getFullYear()} 6yinyang. Built with Next.js & TypeScript. Made with <s>love</s> spite. </p>
    </footer>
  );
}
