import type { NextPage, GetStaticProps } from "next";

import { AllWorks } from "../../types";
import { handleWork } from "../../hooks";

import { Work } from "../../components/sections";
import { MainLayout } from "../../components/layouts";

const WorkPage: NextPage<AllWorks> = ({ works }) => {
  return (
    <MainLayout title="Work">
      <Work works={works} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { getWorks } = handleWork();

  return {
    props: {
      works: await getWorks(),
    },
  };
};

export default WorkPage;
