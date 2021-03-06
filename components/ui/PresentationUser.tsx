import { FC } from "react";
import { Image } from "react-datocms";
import { CoverImage } from "../../types";

interface Props {
  coverImage: CoverImage;
}

export const PresentationUser: FC<Props> = ({ coverImage }) => {
  return (
    <div className="mask mask-hexagon bg-gray-400">
      <Image data={coverImage.responsiveImage} />
    </div>
  );
};
