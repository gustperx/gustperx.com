import { FC } from "react";

interface Props {
  github?: string;
  webSite?: string;
}

export const SocialProject: FC<Props> = ({ github, webSite }) => {
  return (
    <>
      {github && (
        <a href={github} target={"_blank"} rel="noreferrer">
          <i className="fa-brands fa-2x fa-github text-secondary mr-2"></i>
        </a>
      )}
      {webSite && (
        <a href={webSite} target={"_blank"} rel="noreferrer">
          <i className="fa-solid fa-2x fa-arrow-up-right-from-square text-secondary"></i>
        </a>
      )}
    </>
  );
};
