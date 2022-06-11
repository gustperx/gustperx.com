import type { NextPage, GetStaticProps } from "next";

import { AllProjects, Project } from "../../types";
import { ClientGraphQL } from "../../lib";
import { PROJECTSPAGE_QUERY } from "../../graphql";

import { Portfolio } from "../../components/sections";
import { MainLayout } from "../../components/layouts";

const PortfolioPage: NextPage<AllProjects> = ({ projects }) => {
  return (
    <MainLayout title="Gustavo Perez | Projects">
      <Portfolio projects={projects} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await ClientGraphQL({
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
