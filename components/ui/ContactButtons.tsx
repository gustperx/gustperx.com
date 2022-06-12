import { FC } from "react";

interface Props {
  linkedin: string;
  cv: string;
}

export const ContactButtons: FC<Props> = ({ linkedin, cv }) => {
  return (
    <>
      <a
        href={linkedin}
        className="btn btn-outline btn-secondary mt-4 w-40 mr-2"
        target={"_blank"}
        rel="noreferrer"
      >
        Contact me
      </a>
      <a
        href={cv}
        className="btn btn-outline btn-secondary mt-4 w-40"
        target={"_blank"}
        rel="noreferrer"
      >
        Download CV
      </a>
    </>
  );
};
