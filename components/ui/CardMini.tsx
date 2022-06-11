import { FC } from "react";
import Link from "next/link";
import { Project } from "../../types";
import { Badge, SocialProject } from "./";

export const CardMini: FC<Project> = ({
  title,
  shortDescription,
  slug,
  technologies,
  github,
  webSite,
}) => {
  return (
    <div className="border border-secondary rounded-xl p-4">
      <div className="flex justify-between">
        <i className="fa-solid fa-2x fa-folder text-secondary"></i>
        <div className="flex">
          <SocialProject github={github} webSite={webSite} />
        </div>
      </div>
      <Link href={`/portfolio/${slug}`}>
        <div className="flex flex-col cursor-pointer">
          <p className="text-sm font-mono font-semibold my-4">{title}</p>
          <p className="mb-5 text-sm font-mono">{shortDescription}</p>
          <div>
            {technologies.map(({ name }) => (
              <Badge title={name} key={name} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
