import Link from "next/link";
import { FC } from "react";
import { WorkSingle } from "../../types";

export const WorkItem: FC<WorkSingle> = ({
  title,
  period,
  shortDescription,
  slug,
}) => {
  return (
    <>
      <p className="text-lg font-mono italic">{period}</p>
      <p className="mb-5 text-2xl font-bold text-secondary">{title}</p>
      <p className="mb-5 text-lg font-mono">{shortDescription}</p>

      <Link href={`/work/${slug}`}>
        <a className="link link-secondary">Learn More</a>
      </Link>
    </>
  );
};
