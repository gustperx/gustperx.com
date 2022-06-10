import type { NextPage } from "next";
import { GetStaticProps } from "next";

import { gql } from "graphql-request";

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

const WORKSPAGE_QUERY = gql`
  query QueryAllWorks($lang: SiteLocale) {
    allWorks(locale: $lang) {
      title
      order
      period
      slug
      shortDescription
    }
  }
`;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await request({
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
