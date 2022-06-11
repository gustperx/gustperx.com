import { FC } from "react";
import { Technology } from "../../types";

interface Props {
  technologies: Technology[];
}

export const Technologies: FC<Props> = ({ technologies = [] }) => {
  return (
    <>
      <h3 className="py-6 text-2xl font-semibold text-secondary font-mono uppercase">
        Technologies
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {technologies.map((item) => (
          <div key={item.name} className="font-semibold font-mono">
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};
