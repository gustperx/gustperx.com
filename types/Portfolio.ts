import { Technology } from "./";

export interface Project {
  title: string;
  shortDescription: string;
  description: string;
  slug: string;
  order: number;
  isFeatured: boolean;
  coverImage?: any;
  technologies: Technology[];
  github?: string;
  webSite?: string;
}

export interface AllProjects {
  projects: Project[];
}
