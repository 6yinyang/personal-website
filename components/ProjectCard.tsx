import type { Project } from "@/lib/types";

// `{ project: Project }` is the prop type — TypeScript will error
// at compile time (red squiggly in your editor, before you even
// run the app) if something tries to pass this component data
// shaped wrong, e.g. a project object missing `tags`.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tag-list">
        {project.tags.map((tag) => (
          // `key` is required whenever you render a list in React —
          // it's how React tracks which item is which across re-renders.
          <li key={tag} className="tag">{tag}</li>
        ))}
      </ul>
      <a className="card-link" href={project.url} target="_blank" rel="noopener">
        View project →
      </a>
    </article>
  );
}
