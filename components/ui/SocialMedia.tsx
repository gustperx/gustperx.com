import { FC } from "react";

interface Props {
  twitter: string;
  github: string;
  linkedin: string;
}

export const SocialMedia: FC<Props> = ({ github, linkedin, twitter }) => {
  return (
    <>
      <div className="mx-2">
        <a href={twitter} target={"_blank"} rel="noreferrer">
          <i className="fa-brands fa-2x fa-twitter"></i>
        </a>
      </div>
      <div className="mx-2">
        <a href={github} target={"_blank"} rel="noreferrer">
          <i className="fa-brands fa-2x fa-github"></i>
        </a>
      </div>
      <div className="mx-2">
        <a href={linkedin} target={"_blank"} rel="noreferrer">
          <i className="fa-brands fa-2x fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};
