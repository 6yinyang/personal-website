"use client";

import { useState } from "react";
import Link from "next/link";

// In the App Router, every component is a Server Component by
// default — rendered once on the server, shipping no JS to the
// browser for it. This component needs interactivity (the mobile
// menu's open/closed state), so it opts into being a Client
// Component with "use client" at the top of the file.
//
// Compare this to js/main.js in the Phase 1 version, where the same
// toggle was done with manual classList.toggle() on a raw DOM node.
// Here, `isOpen` IS the state — the className is just a function of it.
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="wrap">
        <span className="nav-name">yourname.dev</span>

        <button
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          menu
        </button>

        <ul className={`nav-links ${isOpen ? "is-open" : ""}`}>
          <li>
            <Link href="/#work" onClick={() => setIsOpen(false)}>Work</Link>
          </li>
          <li>
            <Link href="/aurafarm-blog" onClick={() => setIsOpen(false)}>aurafarm</Link>
          </li>
          <li>
            <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
