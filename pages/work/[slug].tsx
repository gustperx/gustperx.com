import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import parse from "html-react-parser";

import { handleWork } from "../../helpers";
import { Work, SlugWorkParams } from "../../types";

import { MainLayout } from "../../components/layouts";
import { Presentation, Technologies } from "../../components/ui";

const WorkPage: NextPage<Work> = ({
  work: { title, description, shortDescription, period, technologies },
}) => {
  return (
    <MainLayout title={title}>
      <div className="hero h-80 bg-base-200">
        <div className="hero-content text-center">
          <div>
            <Presentation
              title={title}
              shortDescription={shortDescription}
              period={period}
            />
          </div>
        </div>
      </div>
      <div className="hero my-8 bg-base-100">
        <div className="hero-content">
          <div>
            {parse(description)}
            <Technologies technologies={technologies} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { getSlugs } = handleWork();
  return {
    paths: await getSlugs(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { getWork } = handleWork();
  return {
    props: {
      work: await getWork(params as SlugWorkParams),
    },
  };
};

export default WorkPage;
