type ProjectStatus = "live" | "archived" | "code-only";
export interface Project {
  id: number;
  title: string;
  description: string;
  features: string;
  technologies: string;
  image: string;
  gif: string;
  gifplay: string;
  githuburl: string;
  plan: null;
  deployurl: string;
}