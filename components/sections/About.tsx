import { FC } from "react";
import parse from "html-react-parser";
import { userLinks } from "../../lib";
import { Profile } from "../../types";
import { ContactButtons, SocialMedia } from "../ui";

export const About: FC<Profile> = ({ description }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 my-4 md:my-12">
          <h1 className="font-bold text-2xl mb-8 md:text-4xl md:mb-12 max-w-xl text-primary leading-tight uppercase">
            About me
          </h1>
          <p className="mb-5 text-lg font-mono">Hi 👋🏻</p>

          {parse(description)}

          <div className="flex flex-row my-4">
            <SocialMedia {...userLinks.socialMedia} />
          </div>
          <div className="flex">
            <ContactButtons {...userLinks.contact} />
          </div>
        </div>
      </div>
    </div>
  );
};
