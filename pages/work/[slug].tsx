import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { gql } from "graphql-request";

import { MainLayout } from "../../components/layouts";
import { request } from "../../lib/datocms";
import { Slug, Work } from "../../types";
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

const WORKPAGE_SLUG_QUERY = gql`
  query WorkSlugQuery {
    allWorks {
      slug
    }
  }
`;

const WORKPAGE_QUERY = gql`
  query WorkQuery($slug: String) {
    allWorks(filter: { slug: { eq: $slug } }) {
      title
      shortDescription
      description
      period
      slug
      order
      technologies {
        name
      }
    }
  }
`;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const data = await request({
    query: WORKPAGE_SLUG_QUERY,
  });

  return {
    paths: data.allWorks.map((slug: Slug) => ({ params: slug })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await request({
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
