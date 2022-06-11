import type { NextPage, GetStaticProps } from "next";

import { AllWorks, WorkSingle } from "../../types";
import { WORKSPAGE_QUERY } from "../../graphql";
import { ClientGraphQL } from "../../lib";

import { Work } from "../../components/sections";
import { MainLayout } from "../../components/layouts";

const WorkPage: NextPage<AllWorks> = ({ works }) => {
  return (
    <MainLayout title="Gustavo Perez | Work">
      <Work works={works} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await ClientGraphQL({
    query: WORKSPAGE_QUERY,
    variables: {
      lang: "en",
    },
  });

  const works: AllWorks = data.allWorks.sort(
    (a: WorkSingle, b: WorkSingle) => a.order - b.order
  );

  return {
    props: {
      works,
    },
  };
};

export default WorkPage;
