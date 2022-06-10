import { FC } from "react";
import Link from "next/link";
import { Project } from "../../types";
import { Badge } from "./";

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
          {github && (
            <a href={github} target={"_blank"}>
              <i className="fa-brands fa-2x fa-github text-secondary mr-2"></i>
            </a>
          )}
          {webSite && (
            <a href={webSite} target={"_blank"}>
              <i className="fa-solid fa-2x fa-arrow-up-right-from-square text-secondary"></i>
            </a>
          )}
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
