import ProjectCard from "@/components/ProjectCard";
import PostPreviewCard from "@/components/PostPreviewCard";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/posts";

// This is a Server Component (the default) — getAllPosts() reads
// files from disk, which can only happen on the server anyway.
// No "use client" needed since nothing here uses state or events.
export default function HomePage() {
  const posts = getAllPosts().slice(0, 2); // 2 most recent posts

  return (
    <>
      <section className="hero wrap">
        <div>
          <p className="hero-eyebrow">Software engineer</p>
          <h1>Hi, I'm Sixinyang.</h1>
          <p className="hero-role">
            I build [the kind of thing you build]. This site is also where I aurafarm and larp.
          </p>
        </div>
        <dl className="hero-status">
          <dt>Currently</dt>
          <dd>Learning WebDev & TypeScript</dd>
          <dt>Based in</dt>
          <dd>Ithaca / Las Vegas</dd>
          <dt>Open to</dt>
          <dd>Internships / new-grad roles</dd>
        </dl>
      </section>

      <section id="work" className="section wrap">
        <h2 className="section-heading">Selected work</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="writing" className="section wrap">
        <h2 className="section-heading">aurafarm</h2>
        <div className="card-grid">
          {posts.map((post) => (
            <PostPreviewCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section id="about" className="section wrap">
        <h2 className="section-heading">About</h2>
        <p style={{ maxWidth: "60ch" }}>
          A short bio: who you are, what you study or where you work, and
          what kind of engineering problems you like.
        </p>
        <ul className="skills" style={{ marginTop: "1rem" }}>
          {["TypeScript", "React", "Next.js", "SQL", "AWS", "Git"].map((skill) => (
            <li key={skill} className="tag">{skill}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="section wrap">
        <h2 className="section-heading">Contact</h2>
        <p>The best way to reach me, or just want to say hi.</p>
        <div className="contact-links">
          <a href="mailto:you@example.com">you@example.com</a>
          <a href="https://github.com/yourname" target="_blank" rel="noopener">
            github.com/yourname
          </a>
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener">
            linkedin.com/in/yourname
          </a>
          {/* Place resume.pdf in the /public folder — anything there
              is served as-is at the site root. */}
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
            target="_blank"
            rel="noopener"
          >
            Resume (PDF)
          </a>
        </div>
      </section>
    </>
  );
}
