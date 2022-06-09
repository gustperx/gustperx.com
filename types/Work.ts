export interface WorkSingle {
  title: string;
  period: string;
  shortDescription: string;
  slug: string;
  order: number;
}

export interface WorkFull {
  title: string;
  period: string;
  shortDescription: string;
  description: string;
  slug: string;
  order: number;
  technologies: Technology[];
}

export interface AllWorks {
  works: WorkSingle[];
}

export interface Technology {
  name: string;
}
