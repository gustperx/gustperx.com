import { FC } from "react";
import { AllWorks } from "../../types";
import { WorkItem } from "../ui";

export const Work: FC<AllWorks> = ({ works = [] }) => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 my-4 md:my-12">
          <h1 className="font-bold text-2xl mb-8 md:text-4xl md:mb-12 max-w-xl text-primary leading-tight uppercase">
            Work Experience
          </h1>
          {works.map((work) => (
            <div key={work.slug}>
              <WorkItem {...work} />
              <div className="divider"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
