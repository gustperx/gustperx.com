import type { NextPage, GetStaticProps } from "next";

import { handleProject } from "../../hooks";
import { AllProjects } from "../../types";

import { Portfolio } from "../../components/sections";
import { MainLayout } from "../../components/layouts";

const PortfolioPage: NextPage<AllProjects> = ({ projects }) => {
  return (
    <MainLayout title="Portfolio">
      <Portfolio projects={projects} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { getProjects } = handleProject();
  return {
    props: {
      projects: await getProjects(),
    },
  };
};

export default PortfolioPage;
