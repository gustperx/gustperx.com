import type { NextPage } from "next";
import { GetStaticProps } from "next";

import { Work } from "../../components/sections";
import { MainLayout } from "../../components/layouts";

import { AllWorks, WorkSingle } from "../../types";
import { request } from "../../lib/datocms";

const WorkPage: NextPage<AllWorks> = ({ works }) => {
  return (
    <MainLayout title="Gustavo Perez | Work">
      <Work works={works} />
    </MainLayout>
  );
};

const WORKPAGE_QUERY = `query QueryAllWorks {
  allWorks(locale: en) {
    title
    order
    period
    slug
    shortDescription
  }
}`;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await request({
    query: WORKPAGE_QUERY,
  });

  const works: AllWorks = data.allWorks.sort(function (
    a: WorkSingle,
    b: WorkSingle
  ) {
    return a.order - b.order;
  });

  return {
    props: {
      works,
    },
  };
};

export default WorkPage;
