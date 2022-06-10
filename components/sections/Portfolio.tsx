import { FC } from "react";
import { AllProjects } from "../../types";
import { Card, CardMini } from "../ui";

export const Portfolio: FC<AllProjects> = ({ projects = [] }) => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="flex flex-col my-8">
          <h1 className="font-bold text-2xl mb-6 md:text-4xl md:mb-6 max-w-xl text-primary leading-tight uppercase">
            Portfolio
          </h1>
          <h3 className="font-bold text-xl mb-2 md:text-2xl md:mb-2 max-w-xl text-secondary leading-tight uppercase">
            Featured
          </h3>
          <hr className="w-12 h-1 bg-orange-500 rounded-full mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects
              .filter((project) => project.isFeatured)
              .map((project) => (
                <Card {...project} key={project.slug} />
              ))}
          </div>

          <div className="divider"></div>

          <h3 className="font-bold text-xl mb-2 md:text-2xl md:mb-2 max-w-xl text-secondary leading-tight uppercase">
            Projects
          </h3>
          <hr className="w-12 h-1 bg-orange-500 rounded-full mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects
              .filter((project) => !project.isFeatured)
              .map((project) => (
                <CardMini {...project} key={project.slug} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
