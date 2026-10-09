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
          <p className="hero-eyebrow">software engineer</p>
          <h1>Hi, I'm Sixinyang.</h1>
          <p className="hero-role">
            I try to build things, anything, but also nothing. This site is also where I aurafarm and larp 🤫🧏‍♂️.
          </p>
        </div>
        <dl className="hero-status">
          <dt>currently</dt>
          <dd>learning webdev & TypeScript</dd>
          <dt>based in</dt>
          <dd>Ithaca / Las Vegas</dd>
          <dt>open to</dt>
          <dd>internships / new-grad roles</dd>
        </dl>
      </section>

      <section id="project" className="section wrap">
        <h2 className="section-heading">selected projects</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="aurafarm" className="section wrap">
        <h2 className="section-heading">aurafarm</h2>
        <div className="card-grid">
          {posts.map((post) => (
            <PostPreviewCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section id="about" className="section wrap">
        <h2 className="section-heading">about</h2>
        <p style={{ maxWidth: "60ch" }}>
          CogSci & CS student at Cornell University. Interested in game design, philosophy, psychology, music, and art.
        </p>
        <ul className="skills" style={{ marginTop: "1rem" }}>
          {["Java", "Python", "C/C++/C#", "OCaml", "TypeScript", "React", "Next.js", "Git", "Unix"].map((skill) => (
            <li key={skill} className="tag">{skill}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="section wrap">
        <h2 className="section-heading">contact</h2>
        <p>uhhh what do you want (call me on mah cellfone!!! (don't actually pls))</p>
        <div className="contact-links">
          <a href="mailto:st2255@cornell.edu">st2255@cornell.edu</a>
          <a href="https://github.com/6yinyang" target="_blank" rel="noopener">
            github.com/6yinyang
          </a>
          <a href="https://linkedin.com/in/sixinyang-tian" target="_blank" rel="noopener">
            linkedin.com/in/sixinyang-tian
          </a>
        </div>
      </section>
    </>
  );
}
