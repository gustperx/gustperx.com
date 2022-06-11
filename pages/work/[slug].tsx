import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { gql } from "graphql-request";

import { MainLayout } from "../../components/layouts";
import { request } from "../../lib/datocms";
import { Slug, Work } from "../../types";

const WorkPage: NextPage<Work> = ({
  work: { title, description, shortDescription, period, technologies },
}) => {
  return (
    <MainLayout title={title}>
      <div className="hero h-80 bg-base-200">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-2xl text-primary font-bold uppercase">
              {title}
            </h1>
            <p className="pt-6 font-mono">{shortDescription}</p>
            <p className="py-6 font-semibold font-mono italic">{period}</p>
          </div>
        </div>
      </div>
      <div className="hero my-8 bg-base-100">
        <div className="hero-content">
          <div className="">
            <p className="py-6 font-mono text-lg">{description}</p>

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
