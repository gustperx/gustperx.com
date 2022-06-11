import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Slug, Work } from "../../types";
import { WORKPAGE_QUERY, WORKPAGE_SLUG_QUERY } from "../../graphql";
import { ClientGraphQL } from "../../lib";

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
            <p className="py-6 font-mono text-lg">{description}</p>
            <Technologies technologies={technologies} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const data = await ClientGraphQL({
    query: WORKPAGE_SLUG_QUERY,
  });

  return {
    paths: data.allWorks.map((slug: Slug) => ({ params: slug })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await ClientGraphQL({
    query: WORKPAGE_QUERY,
    variables: params as { slug: string },
  });

  return {
    props: {
      work: data.allWorks[0],
    },
  };
};

export default WorkPage;
