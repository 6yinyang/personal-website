import type { Project } from "@/lib/types";

// Replace these with your real projects. Each entry becomes one
// card on the homepage via <ProjectCard>. When you reach Phase 2
// (database + REST API), this is the array that eventually gets
// replaced by a real API call.
export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "One or two sentences on what this project does and the problem it solves.",
    tags: ["JavaScript", "Node.js"],
    url: "#",
  },
  {
    title: "Project Two",
    description:
      "One or two sentences on what this project does and the problem it solves.",
    tags: ["Python", "SQL"],
    url: "#",
  },
  {
    title: "Project Three",
    description:
      "One or two sentences on what this project does and the problem it solves.",
    tags: ["React", "AWS"],
    url: "#",
  },
];
