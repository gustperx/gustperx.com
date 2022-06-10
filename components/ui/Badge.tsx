import { FC } from "react";

interface Props {
  title: string;
}

export const Badge: FC<Props> = ({ title }) => {
  return (
    <div className="badge badge-secondary badge-outline badge-sm mr-1">
      {title}
    </div>
  );
};
