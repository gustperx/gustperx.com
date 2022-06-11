import { FC } from "react";

interface Props {
  title: string;
  shortDescription: string;
  period?: string;
}

export const Presentation: FC<Props> = ({
  title,
  shortDescription,
  period,
}) => {
  return (
    <>
      <h1 className="text-2xl text-primary font-bold uppercase">{title}</h1>
      <p className="pt-6 font-mono">{shortDescription}</p>
      {period && (
        <p className="py-6 font-semibold font-mono italic">{period}</p>
      )}
    </>
  );
};
