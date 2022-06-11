import type { NextPage, GetStaticProps } from "next";
import { gql } from "graphql-request";

import { Portfolio } from "../../components/sections";
import { MainLayout } from "../../components/layouts";

import { request } from "../../lib/datocms";
import { AllProjects, Project } from "../../types";

const PortfolioPage: NextPage<AllProjects> = ({ projects }) => {
  return (
    <MainLayout title="Gustavo Perez | Projects">
      <Portfolio projects={projects} />
    </MainLayout>
  );
};

const PROJECTSPAGE_QUERY = gql`
  query QueryAllProjects($lang: SiteLocale) {
    allProjects(locale: $lang) {
      title
      shortDescription
      description
      slug
      order
      isFeatured
      technologies {
        name
      }
      github
      webSite
      coverImage {
        responsiveImage {
          width
          webpSrcSet
          title
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
          alt
        }
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await request({
    query: PROJECTSPAGE_QUERY,
    variables: {
      lang: "en",
    },
  });

  const allProjects: Project[] = data.allProjects;

  const projects = allProjects.sort(
    (a: Project, b: Project) => a.order - b.order
  );

  return {
    props: {
      projects,
    },
  };
};

export default PortfolioPage;
