import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./";
import { Project } from "../../types";

export const Card: FC<Project> = ({
  title,
  shortDescription,
  slug,
  coverImage,
  technologies,
}) => {
  return (
    <Link href={`/portfolio/${slug}`}>
      <div className="max-w-sm bg-base-100 rounded-lg shadow-md cursor-pointer">
        {coverImage && (
          <Image
            src={coverImage.responsiveImage.src}
            width={400}
            height={250}
            className="rounded-t-lg"
          ></Image>
        )}

        <div className="p-5">
          <h5 className="mb-2 font-bold tracking-tight font-mono">{title}</h5>

          <p className="mb-3 font-mono text-sm">{shortDescription}</p>

          <div className="mb-4">
            {technologies.map(({ name }) => (
              <Badge title={name} key={name} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
