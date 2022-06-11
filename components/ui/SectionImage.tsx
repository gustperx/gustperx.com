import { FC } from "react";
import { Image } from "react-datocms";
import { CoverImage } from "../../types";

interface Props {
  coverImage: CoverImage;
}

export const SectionImage: FC<Props> = ({ coverImage }) => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content">
        <div>
          <Image data={coverImage.responsiveImage} />
        </div>
      </div>
    </div>
  );
};
