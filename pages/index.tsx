import type { NextPage, GetStaticProps } from "next";

import { AllWorks, Profile, WorkSingle } from "../types";
import { PROFILE_QUERY, WORKSPAGE_QUERY } from "../graphql";
import { ClientGraphQL } from "../lib";

import { Hero, About, Work } from "../components/sections";
import { MainLayout } from "../components/layouts";

interface Props {
  works: WorkSingle[];
  profile: {
    user: Profile;
  };
}

const HomePage: NextPage<Props> = ({ works, profile: { user } }) => {
  return (
    <MainLayout title="Gustavo Perez | Home">
      <Hero {...user} />
      <About {...user} />
      <Work works={works} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const worksPromise = ClientGraphQL({
    query: WORKSPAGE_QUERY,
    variables: {
      lang: "en",
    },
  });

  const profilePromise = ClientGraphQL({
    query: PROFILE_QUERY,
  });

  const [worksData, profileData] = await Promise.all([
    worksPromise,
    profilePromise,
  ]);

  const works: AllWorks = worksData.allWorks.sort(
    (a: WorkSingle, b: WorkSingle) => a.order - b.order
  );

  return {
    props: {
      works,
      profile: profileData,
    },
  };
};

export default HomePage;
