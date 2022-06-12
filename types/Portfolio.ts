import { ResponsiveImageType } from "react-datocms";
import { Technology } from "./";

export interface Project {
  title: string;
  shortDescription: string;
  description: string;
  slug: string;
  order: number;
  isFeatured: boolean;
  coverImage?: CoverImage;
  technologies: Technology[];
  github?: string;
  webSite?: string;
}

export interface AllProjects {
  projects: Project[];
}

export interface SingleProject {
  project: Project;
}

export interface CoverImage {
  responsiveImage: ResponsiveImageType;
}

export type SlugProjectParams = { slug: string };
