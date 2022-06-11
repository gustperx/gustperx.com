import { FC } from "react";
import { userLinks } from "../../lib";
import { Profile } from "../../types";
import { ContactButtons, PresentationUser, SocialMedia } from "../ui";

export const Hero: FC<Profile> = ({ title, subTitle, coverImage }) => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="col-span-6">
            <h1 className="font-bold text-4xl mt-4 md:text-5xl md:mt-0 max-w-xl text-primary leading-tight uppercase">
              {title}
            </h1>
            <h3 className="font-bold text-2xl mt-2 md:text-4xl max-w-xl leading-tight uppercase">
              {subTitle}
            </h3>
            <hr className="w-12 h-1 bg-orange-500 rounded-full my-8" />

            <div className="flex flex-row my-4">
              <SocialMedia {...userLinks.socialMedia} />
            </div>

            <ContactButtons {...userLinks.contact} />
          </div>
          <div className="col-span-6">
            <PresentationUser coverImage={coverImage} />
          </div>
        </div>
      </div>
    </div>
  );
};
